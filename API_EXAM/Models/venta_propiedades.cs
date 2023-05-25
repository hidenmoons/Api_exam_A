using API_EXAM.Interfaces;
namespace API_EXAM.Models
{
    public class venta_propiedades : IVenta
    {
        public int? ClienteId { get; set; }

        public int? total { get; set; }

        public DateTime? Fecha { get; set; }

    }
}
