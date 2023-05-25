namespace API_EXAM.Interfaces
{
    public interface IVenta
    {
        public int? ClienteId { get; set; }

        public int? total { get; set; }
        public DateTime? Fecha { get; set; }
    }
}
