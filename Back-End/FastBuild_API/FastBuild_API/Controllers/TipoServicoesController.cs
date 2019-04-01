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
    public class TipoServicoesController : ControllerBase
    {
        private readonly FastBuildContext _context;

        public TipoServicoesController(FastBuildContext context)
        {
            _context = context;
        }

        // GET: api/TipoServicoes
        [HttpGet]
        public IEnumerable<TipoServico> GetTipoServico()
        {
            return _context.TipoServico;
        }

        // GET: api/TipoServicoes/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTipoServico([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tipoServico = await _context.TipoServico.FindAsync(id);

            if (tipoServico == null)
            {
                return NotFound();
            }

            return Ok(tipoServico);
        }

        // PUT: api/TipoServicoes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTipoServico([FromRoute] int id, [FromBody] TipoServico tipoServico)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tipoServico.IdTipoServico)
            {
                return BadRequest();
            }

            _context.Entry(tipoServico).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TipoServicoExists(id))
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

        // POST: api/TipoServicoes
        [HttpPost]
        public async Task<IActionResult> PostTipoServico([FromBody] TipoServico tipoServico)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.TipoServico.Add(tipoServico);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTipoServico", new { id = tipoServico.IdTipoServico }, tipoServico);
        }

        // DELETE: api/TipoServicoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTipoServico([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tipoServico = await _context.TipoServico.FindAsync(id);
            if (tipoServico == null)
            {
                return NotFound();
            }

            _context.TipoServico.Remove(tipoServico);
            await _context.SaveChangesAsync();

            return Ok(tipoServico);
        }

        private bool TipoServicoExists(int id)
        {
            return _context.TipoServico.Any(e => e.IdTipoServico == id);
        }
    }
}