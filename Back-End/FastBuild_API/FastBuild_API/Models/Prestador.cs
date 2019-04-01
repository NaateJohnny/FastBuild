using System;
using System.Collections.Generic;

namespace FastBuild_API.Models
{
    public partial class Prestador
    {
        public Prestador()
        {
            PrestadorBairros = new HashSet<PrestadorBairros>();
            PrestadorServicos = new HashSet<PrestadorServicos>();
            ServicosContratado = new HashSet<ServicosContratado>();
        }

        public int IdPrestador { get; set; }
        public string NomeCompleto { get; set; }
        public string Email { get; set; }
        public int IdEndereco { get; set; }
        public string CelularPrincipal { get; set; }
        public string CelularSecundario { get; set; }
        public string Horarios { get; set; }

        public Endereco IdEnderecoNavigation { get; set; }
        public ICollection<PrestadorBairros> PrestadorBairros { get; set; }
        public ICollection<PrestadorServicos> PrestadorServicos { get; set; }
        public ICollection<ServicosContratado> ServicosContratado { get; set; }
    }
}
