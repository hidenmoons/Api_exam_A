using System;
using System.Collections.Generic;

namespace API_EXAM.Models;

public partial class Venta
{
    public int VentaId { get; set; }

    public int? ClienteId { get; set; }

    public string? CodArticulo { get; set; }

    public DateTime? Fecha { get; set; }
    public int? total { get; set; }

    public virtual Cliente? Cliente { get; set; }

    public virtual Articulo? CodArticuloNavigation { get; set; }
}
