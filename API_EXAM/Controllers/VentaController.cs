using API_EXAM.Models;
using Microsoft.AspNetCore.Mvc;

namespace API_EXAM.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class VentaController : ControllerBase
    {
        private readonly ExamenContext _examenContext;
        public VentaController(ExamenContext _examenContext)
        {
            this._examenContext = _examenContext;
        }
        [HttpPost]
        public async Task<IActionResult> Venta(venta_propiedades venta)
        {
            var newventa = new Compras()
            {
                ClienteId = venta.ClienteId,
                Total = venta.total,
                Fecha = DateTime.Now,
            };
            await _examenContext.Compras.AddAsync(newventa);
            await _examenContext.SaveChangesAsync();

            return Ok(newventa);
        }

    }
}
