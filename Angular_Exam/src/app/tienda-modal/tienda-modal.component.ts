import { Component, OnInit, Input } from '@angular/core';
import { Tienda } from '../models/tienda.model';
import { TiendaService } from '../services/tienda.service';


@Component({
  selector: 'app-tienda-modal-component',
  templateUrl: './tienda-modal.component.html',
  styleUrls: ['./tienda-modal.component.css']
})
export class TiendaModalComponent implements OnInit {
  @Input() modo: string|any;
   tienda: Tienda|any={};
   @Input() tiendaSeleccionada: Tienda | any = {};

  constructor(private tiendaservice:TiendaService) { }

  ngOnInit(): void {
    console.log(this.modo)
  }
  createtienda() {
 
    const tienda = { Sucursal: this.tienda.Sucursal, Direccion:this.tienda.Direccion };

    this.tiendaservice.CreateTienda(tienda).subscribe(data => 
      {
        console.log(data);
      })
    
  }
 
      
      
  
  updatetienda()
  {
    console.log(this.tiendaSeleccionada)
    return this.tiendaservice.UpdateTienda(this.tiendaSeleccionada.tiendaId,this.tiendaSeleccionada).subscribe(
      ()=>{
       
      })
  }
}
