using System;
using System.Collections.Generic;

namespace FastBuild_API.Models
{
    public partial class Cliente
    {
        public Cliente()
        {
            ServicosContratado = new HashSet<ServicosContratado>();
        }

        public int IdCliente { get; set; }
        public string NomeCompleto { get; set; }
        public string Email { get; set; }
        public int IdEndereco { get; set; }
        public string CelularPrincipal { get; set; }
        public string CelularSecundario { get; set; }
        public string Senha { get; set; }

        public Endereco IdEnderecoNavigation { get; set; }
        public ICollection<ServicosContratado> ServicosContratado { get; set; }
    }
}
