import { Component, OnInit } from '@angular/core';
import { Articulo } from '../models/articulo.model';
import { ArticulosService } from '../services/Articulos.service';
import { venta } from '../models/Venta.model';
import { CarritoServices } from '../services/Carrito.service';
@Component({
  selector: 'app-articulosventa',
  templateUrl: './articulosventa.component.html',
  styleUrls: ['./articulosventa.component.css']
})
export class ArticulosventaComponent implements OnInit {
  listaarticulos: Articulo[] | any;
  carrito: Articulo[] = [];
  
  venta: venta = new venta();
  direccionEnvio: string | any;
  mostrarMensajePagar: boolean = false;
  constructor(private articuloservice: ArticulosService,private carritoservice:CarritoServices) { }

  ngOnInit(): void {
    console.log(this.listaArticulos)
    this.listaArticulos()
  }

  listaArticulos() {
    this.articuloservice.GetArt().subscribe(data => {
      this.listaarticulos = data
      console.log(data)
    })
  }


  agregarcarrito(articulo: Articulo) {
    let total = 0;
    this.carrito.push(articulo);
    console.log(this.carrito);

  }
  calcularTotal(): number {
    let total: number = 0;
    for (let producto of this.carrito) {
      total += producto.precio;
    }
    return total;
  }

  pagar() {
    const localStorageValue= localStorage.getItem('cliente');
    if (localStorageValue !==null){
      const parsedValue= JSON.parse(localStorageValue);
      const clientId = parsedValue.clienteId;
      this.venta.clienteId=clientId;
    }
    
    this.venta.total=this.calcularTotal();
    console.log(this.venta,);
    this.carritoservice.CreateVenta(this.venta).subscribe(data=>{console.log(data);});
    localStorage.removeItem('cliente');
    alert('gracias por su compra')
  }
  quitaritem(index: number) {
    this.carrito.splice(index, 1);
  }
  imageFail(event: any) {
    event.target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png?20210219185637';
  }
}
