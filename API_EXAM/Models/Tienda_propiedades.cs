using API_EXAM.Interfaces;
namespace API_EXAM.Models
{
    public class Tienda_propiedades : ITienda
    {
        public string? Sucursal { get; set; }
        public string? Direccion { get; set; }
    }
}
