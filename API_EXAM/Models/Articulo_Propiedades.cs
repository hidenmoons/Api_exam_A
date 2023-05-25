using API_EXAM.Interfaces;

namespace API_EXAM.Models
{
    public class Articulo_Propiedades : IArticulo
    {
        public string Codigo { get; set; } = null!;
        public int TiendaId { get; set; }
        public string? Descripcion { get; set; }
        public int Precio { get; set; }
        public string? Imagen { get; set; }
        public int Stock { get; set; }
        public DateTime? Fecha { get; set; }
    }
}
