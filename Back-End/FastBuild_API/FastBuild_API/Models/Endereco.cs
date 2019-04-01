using System;
using System.Collections.Generic;

namespace FastBuild_API.Models
{
    public partial class Endereco
    {
        public Endereco()
        {
            Cliente = new HashSet<Cliente>();
            Prestador = new HashSet<Prestador>();
        }

        public int IdEndereco { get; set; }
        public string Descricao { get; set; }
        public string Complemento { get; set; }
        public string Cep { get; set; }
        public int IdBairro { get; set; }

        public Bairro IdBairroNavigation { get; set; }
        public ICollection<Cliente> Cliente { get; set; }
        public ICollection<Prestador> Prestador { get; set; }
    }
}
