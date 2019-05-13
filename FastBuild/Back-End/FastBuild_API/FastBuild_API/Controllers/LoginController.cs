using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FastBuild_API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FastBuild_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly FastBuildContext _context;

        public LoginController(FastBuildContext context)
        {
            _context = context;
        }

        // POST: api/Login
        [HttpPost]
        public async Task<IActionResult> PostLogin([FromBody] Login userLogin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var isUser =  _context.Cliente.Any(user => user.Email == userLogin.Email && user.Senha == userLogin.Senha);

            if (isUser)
            {
                var cliente = _context.Cliente.FirstOrDefault(user => user.Email == userLogin.Email && user.Senha == userLogin.Senha);

                cliente = await _context.Cliente.FindAsync(cliente.IdCliente);

                var client = new { idCliente = cliente.IdCliente, nomeCliente = cliente.NomeCompleto, emailCliente = cliente.Email };

                //client = { idClinte = cliente.IdCliente; cliente.Email};

                return Ok(client);
            }
            else
            {
                return NoContent();
            }

        }
    }
}