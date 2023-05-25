using System;
using System.Collections.Generic;

namespace API_EXAM.Models;

public partial class Articulo
{
    public string Codigo { get; set; } = null!;

    public int? TiendaId { get; set; }

    public string? Descripcion { get; set; }

    public int? Precio { get; set; }

    public string? Imagen { get; set; }

    public int? Stock { get; set; }

    public DateTime? Fecha { get; set; }

    public virtual Tienda? Tienda { get; set; }

    public virtual ICollection<Venta> Venta { get; set; } = new List<Venta>();
}
