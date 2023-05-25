namespace API_EXAM.Interfaces
{
    public interface ICliente
    {
        public string Nombre { get; set; }

        public string Apellidos { get; set; }

        public string Direccion { get; set; }

        public DateTime? Fecha { get; set; }
        public string Correo { get; set; }

    }
}
