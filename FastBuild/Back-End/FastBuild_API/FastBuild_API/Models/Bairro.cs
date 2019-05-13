using System;
using System.Collections.Generic;

namespace FastBuild_API.Models
{
    public partial class Bairro
    {
        public Bairro()
        {
            Endereco = new HashSet<Endereco>();
            PrestadorBairros = new HashSet<PrestadorBairros>();
        }

        public int IdBairro { get; set; }
        public string Descricao { get; set; }
        public string Cidade { get; set; }
        public string Estado { get; set; }

        public ICollection<Endereco> Endereco { get; set; }
        public ICollection<PrestadorBairros> PrestadorBairros { get; set; }
    }
}
