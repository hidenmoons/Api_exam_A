using Microsoft.AspNetCore.Mvc;
using API_EXAM.Models;
using Microsoft.EntityFrameworkCore;

namespace API_EXAM.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ArticuloController : ControllerBase
    {
       private readonly ExamenContext _examenContext;
        public ArticuloController(ExamenContext _examenContext)
        {
            this._examenContext = _examenContext;
        }

     

        [HttpPost]
        public async Task<ActionResult> AddArticulo(Articulo_Propiedades articulo)
        {
            var Articulo = new Articulo()
            {
                Codigo = articulo.Codigo,
                TiendaId = articulo.TiendaId,
                Descripcion= articulo.Descripcion,
                Precio=articulo.Precio,
                Imagen=articulo.Imagen,
                Stock=articulo.Stock,
                Fecha= DateTime.Now
                
            };
            await _examenContext.Articulos.AddAsync(Articulo);
            await _examenContext.SaveChangesAsync();
            return Ok(articulo);
        }
        [HttpGet]
        public async Task<ActionResult> GetArticulo()
        {

            return Ok(await _examenContext.Articulos.ToListAsync());
        }
        [HttpPut]
        [Route("{Codigo}")]
        public async Task<ActionResult> PutArticulo([FromRoute] string Codigo,Articulo_Propiedades _Art)
        {
            var articulos =  await _examenContext.Articulos.FindAsync(Codigo);
            if (articulos==null)
            {
                return NotFound("Codigo no valido");
            }

            articulos.TiendaId= _Art.TiendaId;
            articulos.Descripcion = _Art.Descripcion;
            articulos.Precio = _Art.Precio;
            articulos.Imagen = _Art.Imagen;
            articulos.Stock= _Art.Stock;

            await _examenContext.SaveChangesAsync();

            return Ok(articulos);

        }
        [HttpDelete]
        [Route("{Codigo}")]
        public async Task<ActionResult> DeleteArticulo([FromRoute] string Codigo) 
        {
            var articulo = await _examenContext.Articulos.FindAsync(Codigo);
            if (articulo == null)
            {
                return NotFound("Codigo no valido");
            }
            _examenContext.Articulos.Remove(articulo);
            await _examenContext.SaveChangesAsync();
            return Ok();
        }
    }
}
