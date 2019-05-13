using System;
using System.Collections.Generic;

namespace FastBuild_API.Models
{
    public partial class PrestadorBairros
    {
        public int IdPrestador { get; set; }
        public int IdBairro { get; set; }

        public Bairro IdBairroNavigation { get; set; }
        public Prestador IdPrestadorNavigation { get; set; }
    }
}
