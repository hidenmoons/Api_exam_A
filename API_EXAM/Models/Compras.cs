namespace API_EXAM.Models
{
    public class Compras
    {
        public int VentaId { get; set; }

        public int? ClienteId { get; set; }

        public int? Total { get; set; }

        public DateTime? Fecha { get; set; }
    }
}
