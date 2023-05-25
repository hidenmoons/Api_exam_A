import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../services/tienda.service';
import { Tienda } from '../models/tienda.model';
import { Subscription } from 'rxjs';
import { TiendaModalComponent } from '../tienda-modal/tienda-modal.component';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  tiendaSeleccionada: Tienda | any = {};
  modo: string = ''; // Valor por defecto es 'crear'

  subscription: Subscription|any;
  refreshTable: boolean = false;

  tienda: Tienda|any =[];
 

  constructor(private tiendaservice:TiendaService) { }

  ngOnInit(): void {
    this.refreshTable = true;

    this.gettiendas();

    //this.gettiendaid();
   
  }
  openFormModalcreate() {

    this.modo= 'crear';
    
    console.log(this.modo)
     this.tiendaSeleccionada;
   }
  openFormModalupdate(tienda: Tienda) {
   this.modo= 'actualizar';
   console.log(this.modo)
    this.tiendaSeleccionada = tienda;
  }

  gettiendas()
  {
    const usuario= this.tienda

    this.subscription = this.tiendaservice.GetTiendas().subscribe(
      response=>{ 
        this.tienda = response
      }
    );
      
      
  }

  gettiendaid()
  {
     return this.tiendaservice.GetTiendaid(1).subscribe(response=>
      {
        this.tienda = response
        console.log(this.tienda.tiendaId);
        console.log(response)
      }
      )
  }

  
  deletetienda(id:number)
  {
    
    
    return this.tiendaservice.DeleteTienda(id).subscribe
    (reponse=>{
      
      this.gettiendas();
    }
    )
    
  }

}
