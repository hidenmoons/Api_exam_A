import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ArticulosService } from '../services/Articulos.service';
import { Articulo } from '../models/articulo.model';
import { TiendaService } from '../services/tienda.service';
import { ImgurService } from '../services/ImgurService.service';
import { Tienda } from '../models/tienda.model';
@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})

export class ArticulosComponent implements OnInit {
  modo: string = ''; // Valor por defecto es 'crear'
  @Input() articulo: Articulo[] | any = [];
  tiendasIds: any[] = [];
  tiendas: Tienda[] = [];
  selectedId: any;
  filteredArticulos: Articulo[] = [];
  refreshTable: boolean = false;
  selectedFile: File | any;
  articuloselect: Articulo | any = {};

  constructor(
    private articulosService: ArticulosService,
    private imgurService: ImgurService,
    private tiendaservices: TiendaService) { }

  ngOnInit(): void {
    this.getArticulos();
    this.refreshTable = true;
    console.log(this.articulo)
    console.log('getArticulos');
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
  uploadImage() {
    this.getArticulos();
    console.log(this.articulo);
  }

  getArticulos() {

    this.articulosService.GetArt().subscribe(
      response => {
        this.articulo = response;
        
      },
      error => {
        console.error(error);
      }
    );
  }

  imageFail(event: any) {
    event.target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png?20210219185637';
  }

  openFormModalcreate() {

    this.modo = 'crear';

    console.log(this.modo)
    this.articuloselect;
  }
  openFormModalupdate(articulo: Articulo) {
    this.modo = 'actualizar';
    console.log(this.modo)
    this.articuloselect = articulo;
    console.log(this.articulo);
  }

  deleteart(id: string) {

    return this.articulosService.DeleteArt(id).subscribe(response => {
      this.deleteok("Borraste el producto" + " " + id);
      console.log("soy un id en el metodo" + id)
      this.getArticulos();

      console.log(response)
    },
      error => {
        console.error(error);
      }
    );
  }

  deleteok(message: string) {
    alert(message)
  }

  

 
}
