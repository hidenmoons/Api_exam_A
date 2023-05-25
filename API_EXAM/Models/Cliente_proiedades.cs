using API_EXAM.Interfaces;
namespace API_EXAM.Models
{
    public class Cliente_proiedades:ICliente
    {

        public string Nombre { get; set; } = null!;

        public string Apellidos { get; set; } = null!;

        public string Direccion { get; set; } = null!;

        public DateTime? Fecha { get; set; }
        public string Correo { get; set; }

    }
}
