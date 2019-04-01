using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FastBuild_API.Models;

namespace FastBuild_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PrestadorServicosController : ControllerBase
    {
        private readonly FastBuildContext _context;

        public PrestadorServicosController(FastBuildContext context)
        {
            _context = context;
        }

        // GET: api/PrestadorServicos
        [HttpGet]
        public IEnumerable<PrestadorServicos> GetPrestadorServicos()
        {
            return _context.PrestadorServicos;
        }

        // GET: api/PrestadorServicos/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPrestadorServicos([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var prestadorServicos = await _context.PrestadorServicos.FindAsync(id);

            if (prestadorServicos == null)
            {
                return NotFound();
            }

            return Ok(prestadorServicos);
        }

        // PUT: api/PrestadorServicos/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPrestadorServicos([FromRoute] int id, [FromBody] PrestadorServicos prestadorServicos)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != prestadorServicos.IdPrestador)
            {
                return BadRequest();
            }

            _context.Entry(prestadorServicos).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PrestadorServicosExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/PrestadorServicos
        [HttpPost]
        public async Task<IActionResult> PostPrestadorServicos([FromBody] PrestadorServicos prestadorServicos)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.PrestadorServicos.Add(prestadorServicos);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (PrestadorServicosExists(prestadorServicos.IdPrestador))
                {
                    return new StatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetPrestadorServicos", new { id = prestadorServicos.IdPrestador }, prestadorServicos);
        }

        // DELETE: api/PrestadorServicos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePrestadorServicos([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var prestadorServicos = await _context.PrestadorServicos.FindAsync(id);
            if (prestadorServicos == null)
            {
                return NotFound();
            }

            _context.PrestadorServicos.Remove(prestadorServicos);
            await _context.SaveChangesAsync();

            return Ok(prestadorServicos);
        }

        private bool PrestadorServicosExists(int id)
        {
            return _context.PrestadorServicos.Any(e => e.IdPrestador == id);
        }
    }
}