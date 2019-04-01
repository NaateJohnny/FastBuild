using System;
using System.Collections.Generic;

namespace FastBuild_API.Models
{
    public partial class ServicosContratado
    {
        public int IdCliente { get; set; }
        public int IdPrestador { get; set; }
        public int IdTipoServico { get; set; }

        public Cliente IdClienteNavigation { get; set; }
        public Prestador IdPrestadorNavigation { get; set; }
        public TipoServico IdTipoServicoNavigation { get; set; }
    }
}
