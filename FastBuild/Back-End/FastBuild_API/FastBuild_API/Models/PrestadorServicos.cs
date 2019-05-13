using System;
using System.Collections.Generic;

namespace FastBuild_API.Models
{
    public partial class PrestadorServicos
    {
        public int IdPrestador { get; set; }
        public int IdTipoServico { get; set; }
        public decimal Preco { get; set; }

        public Prestador IdPrestadorNavigation { get; set; }
        public TipoServico IdTipoServicoNavigation { get; set; }
    }
}
