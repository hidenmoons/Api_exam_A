namespace API_EXAM.Interfaces
{
    public interface IArticulo
    {
        public string Codigo { get; set; }

        public int TiendaId { get; set; }

        public string? Descripcion { get; set; }

        public int Precio { get; set; }

        public string? Imagen { get; set; }

        public int Stock { get; set; }

        public DateTime? Fecha { get; set; }
    }
}
