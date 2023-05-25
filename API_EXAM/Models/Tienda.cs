using System;
using System.Collections.Generic;

namespace API_EXAM.Models;

public partial class Tienda
{
    public int TiendaId { get; set; }

    public string? Sucursal { get; set; }

    public string? Direccion { get; set; }

    public virtual ICollection<Articulo> Articulos { get; set; } = new List<Articulo>();
}
