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
    public class PrestadorsController : ControllerBase
    {
        private readonly FastBuildContext _context;

        public PrestadorsController(FastBuildContext context)
        {
            _context = context;
        }

        // GET: api/Prestadors
        [HttpGet]
        public IEnumerable<Prestador> GetPrestador()
        {
            return _context.Prestador;
        }

        // GET: api/Prestadors/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPrestador([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var prestador = await _context.Prestador.FindAsync(id);

            if (prestador == null)
            {
                return NotFound();
            }

            return Ok(prestador);
        }

        // PUT: api/Prestadors/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPrestador([FromRoute] int id, [FromBody] Prestador prestador)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != prestador.IdPrestador)
            {
                return BadRequest();
            }

            _context.Entry(prestador).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PrestadorExists(id))
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

        // POST: api/Prestadors
        [HttpPost]
        public async Task<IActionResult> PostPrestador([FromBody] Prestador prestador)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Prestador.Add(prestador);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPrestador", new { id = prestador.IdPrestador }, prestador);
        }

        // DELETE: api/Prestadors/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePrestador([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var prestador = await _context.Prestador.FindAsync(id);
            if (prestador == null)
            {
                return NotFound();
            }

            _context.Prestador.Remove(prestador);
            await _context.SaveChangesAsync();

            return Ok(prestador);
        }

        private bool PrestadorExists(int id)
        {
            return _context.Prestador.Any(e => e.IdPrestador == id);
        }
    }
}