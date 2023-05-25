using Microsoft.AspNetCore.Mvc;
using API_EXAM.Models;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace API_EXAM.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TiendaController : ControllerBase
    {
        private readonly ExamenContext _examenContext;
        public TiendaController(ExamenContext examenContext)
        {
            this._examenContext = examenContext;
        }

        [HttpPost]
        public async Task<IActionResult> AddTienda(Tienda_propiedades _Tienda)
        {
            var tienda = new Tienda
            {
                Sucursal = _Tienda.Sucursal,
                Direccion = _Tienda.Direccion,
            };

            await _examenContext.Tienda.AddAsync(tienda);
            await _examenContext.SaveChangesAsync();

            return Ok(tienda);
        }

        [HttpGet]
        public async Task<IActionResult> GetTienda()
        {
            return Ok(await _examenContext.Tienda.ToListAsync());
        }
        [HttpGet]
        [Route("{TiendaID:int}")]
        public async Task<IActionResult> GetTienda_Articulos([FromRoute] int TiendaID )
        {
            Console.WriteLine("empezando del firsordefault");

            var tienda = await _examenContext.Tienda
                .Include(x => x.Articulos)
                .FirstOrDefaultAsync(x=> x.TiendaId== TiendaID);

            var options = new JsonSerializerOptions
            {
                ReferenceHandler = ReferenceHandler.Preserve,
                WriteIndented = true,
                PropertyNameCaseInsensitive = true,
               PropertyNamingPolicy = JsonNamingPolicy.CamelCase

            };
            var json = JsonSerializer.Serialize(tienda, options);
            Console.WriteLine(tienda + "saliendo del firsordefault");
            if (tienda == null)
            {
                Console.WriteLine(tienda+"no encontrada");
                return BadRequest(tienda);
            }

           
            return Ok(json); 
        }
        [HttpPut]
        [Route("{TiendaId:int}")]
        public async Task<IActionResult> PutTienda([FromRoute]int TiendaId ,Tienda_propiedades _Tienda)
        {
            var tienda = await _examenContext.Tienda.FindAsync(TiendaId);

            if (tienda == null)
            {
                return BadRequest("Tienda no valida");
            }

            tienda.Sucursal= _Tienda.Sucursal;
            tienda.Direccion= _Tienda.Direccion;

            await _examenContext.SaveChangesAsync();

            return Ok(tienda);
        }

        [HttpDelete]
        [Route("{TiendaId:int}")]
        public async Task<ActionResult> DeleteTienda([FromRoute] int TiendaId)
        {
            var tienda = await _examenContext.Tienda.FindAsync(TiendaId);

            if (tienda == null)
            {
                return BadRequest("Tienda no existe");
            }

            _examenContext.Tienda.Remove(tienda);

            await _examenContext.SaveChangesAsync();

            return Ok();
        }
    }
}
