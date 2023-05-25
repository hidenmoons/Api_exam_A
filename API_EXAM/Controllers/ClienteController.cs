using Microsoft.AspNetCore.Mvc;
using API_EXAM.Models;
using Microsoft.EntityFrameworkCore;

namespace API_EXAM.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClienteController : ControllerBase
    {
        private readonly ExamenContext _examenContext;
        
        public ClienteController(ExamenContext _examenContext)
        {
            this._examenContext = _examenContext;
        }

        [HttpGet]
        public async Task<IActionResult> Get_Clientes()
        {
            
            return Ok(await _examenContext.Clientes.ToListAsync());

        }
        [HttpGet]
        [Route("{nombre}/{correo}")]
        public async Task<IActionResult> login([FromRoute] string nombre,[FromRoute] string correo)
        {
            var user=  await _examenContext.Clientes.FirstOrDefaultAsync(x=>x.Nombre == nombre && x.Correo== correo);
            if (user!=null)
                return Ok(user);
            else
            {
                return NotFound("cliente no encontrado");
            }

           
        }

        [HttpPost]
        public async Task<IActionResult> AddCliente(Cliente_proiedades cliente)
        {

            var Cliente = new Cliente()
            {
                Nombre = cliente.Nombre,
                Apellidos = cliente.Apellidos,
                Direccion = cliente.Direccion,
                Fecha = DateTime.Now,
                Correo = cliente.Correo,
            };

            await _examenContext.Clientes.AddAsync(Cliente);
            await _examenContext.SaveChangesAsync();

            return Ok(cliente);
        }

        [HttpPut]
        [Route("{ClienteId:int}")]
        public async Task<IActionResult> Update([FromRoute] int ClienteId, Cliente_proiedades _Cliente)
        {
            var cliente = await _examenContext.Clientes.FindAsync(ClienteId);

            if (cliente == null)
            {

                return NotFound();
            }

            cliente.Nombre= _Cliente.Nombre;
            cliente.Apellidos= _Cliente.Apellidos;
            cliente.Direccion= _Cliente.Direccion;

            await _examenContext.SaveChangesAsync();

            return Ok(cliente);
        }

        [HttpDelete]
        [Route("{ClienteId:int}")]
        public async Task<IActionResult> Delete([FromRoute] int ClienteId)
        {
            var cliente = await _examenContext.Clientes.FindAsync(ClienteId);

            if (cliente== null)
            {
                return NotFound();
            }

            _examenContext.Clientes.Remove(cliente);
            await _examenContext.SaveChangesAsync();

            return Ok(cliente);
        }

    }
}
