import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../services/Articulos.service';
import { TiendaService } from '../services/tienda.service';
import { Tienda } from '../models/tienda.model';
import { Articulo } from '../models/articulo.model';

@Component({
  selector: 'app-articulos-tienda',
  templateUrl: './articulos-tienda.component.html',
  styleUrls: ['./articulos-tienda.component.css']
})
export class ArticulosTiendaComponent implements OnInit {
  tienda:Tienda|any={};

  articulo:Articulo[]|any=[];
  constructor(private tiendaservices: TiendaService) { }

  ngOnInit(): void {
    //this.gettiendabyart()
  }
  gettiendabyart(id:number)
  {
    if(id!==null||id!==undefined)
    {
      this.tiendaservices.GetTiendaid(id).subscribe(data=>
        {
          this.tienda=data
          this.articulo=this.tienda.articulos.$values;
  
          console.log(this.articulo)
          console.log(this.tienda)
        })
    }
    else{
      
    }
    
  }
}
