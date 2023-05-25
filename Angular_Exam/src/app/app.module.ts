import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterClientComponent } from './register-client/register-client.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ArticulosComponent } from './articulos/articulos.component';
import { TiendaComponent } from './tienda/tienda.component';
import { HeaderComponent } from './header/header.component';
import { TiendaModalComponent } from './tienda-modal/tienda-modal.component';
import { ArticulosModalComponent } from './articulos-modal/articulos-modal.component';
import { ArticulosventaComponent } from './articulosventa/articulosventa.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesModalComponent } from './clientes-modal/clientes-modal.component';
import { ArticulosTiendaComponent } from './articulos-tienda/articulos-tienda.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterClientComponent,
    ArticulosComponent,
    TiendaComponent,
    HeaderComponent,
    TiendaModalComponent,
    ArticulosModalComponent,
    ArticulosventaComponent,
    ClientesComponent,
    ClientesModalComponent,
    ArticulosTiendaComponent,
    TestComponent,
  
   
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
