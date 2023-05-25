import { Articulo } from "./articulo.model";


export interface Tienda{
   tiendaId:number;
   Sucursal:string;
   Direccion:string; 
   articulo:Articulo[];
}