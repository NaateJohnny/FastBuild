using System;
using System.Collections.Generic;

namespace FastBuild_API.Models
{
    public partial class TipoServico
    {
        public TipoServico()
        {
            PrestadorServicos = new HashSet<PrestadorServicos>();
            ServicosContratado = new HashSet<ServicosContratado>();
        }

        public int IdTipoServico { get; set; }
        public string Descricao { get; set; }

        public ICollection<PrestadorServicos> PrestadorServicos { get; set; }
        public ICollection<ServicosContratado> ServicosContratado { get; set; }
    }
}
