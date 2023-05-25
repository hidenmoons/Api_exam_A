import { Component, Input, OnInit } from '@angular/core';
import { Articulo } from '../models/articulo.model';
import { ArticulosService } from '../services/Articulos.service';
import { ImgurService } from '../services/ImgurService.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-articulos-modal',
  templateUrl: './articulos-modal.component.html',
  styleUrls: ['./articulos-modal.component.css']
})
export class ArticulosModalComponent implements OnInit {
  @Input() modo: string|any;
  rutaImagen: string = '';
  imageURL: SafeUrl | undefined;
  cleanurl: any
  @Input() articuloselect: Articulo|any ={};
  articulos: Articulo|any={};
  constructor(private articulosService:ArticulosService,private imgservice:ImgurService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    console.log(this.articuloselect);
  }
  creatArt() {
 
    const articulo = {
                    codigo:this.articulos.codigo, 
                    tiendaId: this.articulos.tiendaId, 
                    descripcion:this.articulos.descripcion,
                    imagen:this.cleanurl, 
                    precio:this.articulos.precio,
                    Stock:this.articulos.stock
                  };

    this.articulosService.create(articulo).subscribe(data => 
      {
        console.log(data);
      },
      error=>
      {
        alert("asegurate que el id de tienda exista y que no se repita el codigo");
        console.error(error);
      }
      )
    
  }
  updateArt()
  {
    this.articuloselect.imagen=this.cleanurl
    this.articulosService.UpdateTienda(this.articuloselect.codigo , this.articuloselect).subscribe(data =>
      {
        console.log(data);
      },
      error=>
      {
        alert("asegurate que el id de tienda sea correcto")
      }
      )
  }
  onUploadImage(event: any) {
    this.imgservice.onUploadImage(event).subscribe(res=>
      {
        this.rutaImagen="https://localhost:7008/img/upload"+res;
          console.log('Imagen cargada con éxito', res);
          console.log(this.rutaImagen);
          const fileName = res.nombreArchivo;
  
          const imageURL = `https://localhost:7008/imagenes/${fileName}`;
  
          this.imageURL = this.sanitizer.bypassSecurityTrustUrl(imageURL);
          const cleanurl = new URL(imageURL).href;
          this.cleanurl = cleanurl
          console.log(this.imageURL);
          console.log(cleanurl);
          console.log(this.cleanurl)
      })
    this.imageURL= this.imgservice.imageURL
    console.log(this.cleanurl);
    console.log( this.imgservice.imageURL)
}
}
