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
    public class ServicosContratadoesController : ControllerBase
    {
        private readonly FastBuildContext _context;

        public ServicosContratadoesController(FastBuildContext context)
        {
            _context = context;
        }

        // GET: api/ServicosContratadoes
        [HttpGet]
        public IEnumerable<ServicosContratado> GetServicosContratado()
        {
            return _context.ServicosContratado;
        }

        // GET: api/ServicosContratadoes/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetServicosContratado([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var servicosContratado = await _context.ServicosContratado.FindAsync(id);

            if (servicosContratado == null)
            {
                return NotFound();
            }

            return Ok(servicosContratado);
        }

        // PUT: api/ServicosContratadoes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutServicosContratado([FromRoute] int id, [FromBody] ServicosContratado servicosContratado)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != servicosContratado.IdCliente)
            {
                return BadRequest();
            }

            _context.Entry(servicosContratado).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ServicosContratadoExists(id))
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

        // POST: api/ServicosContratadoes
        [HttpPost]
        public async Task<IActionResult> PostServicosContratado([FromBody] ServicosContratado servicosContratado)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.ServicosContratado.Add(servicosContratado);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ServicosContratadoExists(servicosContratado.IdCliente))
                {
                    return new StatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetServicosContratado", new { id = servicosContratado.IdCliente }, servicosContratado);
        }

        // DELETE: api/ServicosContratadoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteServicosContratado([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var servicosContratado = await _context.ServicosContratado.FindAsync(id);
            if (servicosContratado == null)
            {
                return NotFound();
            }

            _context.ServicosContratado.Remove(servicosContratado);
            await _context.SaveChangesAsync();

            return Ok(servicosContratado);
        }

        private bool ServicosContratadoExists(int id)
        {
            return _context.ServicosContratado.Any(e => e.IdCliente == id);
        }
    }
}