import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './articulos/articulos.component';
import { RegisterClientComponent } from './register-client/register-client.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ArticulosventaComponent } from './articulosventa/articulosventa.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ArticulosTiendaComponent } from './articulos-tienda/articulos-tienda.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [{
  path: 'Articulos',
  component: ArticulosComponent,
},
{
  path: 'registrocliente',
  component: RegisterClientComponent
},
{
  path: 'tienda',
  component: TiendaComponent
},
{
  path:'',
  component:RegisterClientComponent
},
{
  path: 'articulos/venta',
  component: ArticulosventaComponent, canActivate: [AuthGuard]
},
{
  path: 'clientes',
  component: ClientesComponent
},
{
  path: 'articulos/tienda',
  component: ArticulosTiendaComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
