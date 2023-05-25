using System;
using System.Collections.Generic;

namespace API_EXAM.Models;

public partial class Cliente
{
    public int ClienteId { get; set; }

    public string Nombre { get; set; } = null!;

    public string Apellidos { get; set; } = null!;

    public string Direccion { get; set; } = null!;

    public DateTime? Fecha { get; set; }
    public string Correo { get; set; }

    public virtual ICollection<Venta> Venta { get; set; } = new List<Venta>();
}
