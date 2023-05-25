using API_EXAM.Models;
using Microsoft.AspNetCore.Mvc;

namespace API_EXAM.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class img : ControllerBase
    {
        [HttpPost("upload")]
        public IActionResult Upload(IFormFile imagen)
        {
            if (imagen == null || imagen.Length == 0)
            {
                return BadRequest("No se ha proporcionado ninguna imagen.");
            }

            var nombreArchivo = Guid.NewGuid().ToString() + Path.GetExtension(imagen.FileName);

            var carpetaDestino = Path.Combine(Directory.GetCurrentDirectory(), "imagenes");

            if (!Directory.Exists(carpetaDestino))
            {
                Directory.CreateDirectory(carpetaDestino);
            }

            var rutaArchivo = Path.Combine(carpetaDestino, nombreArchivo);

            using (var stream = new FileStream(rutaArchivo, FileMode.Create))
            {
                 imagen.CopyTo(stream);
            }


            return Ok(new { nombreArchivo });
        }

    }
}
