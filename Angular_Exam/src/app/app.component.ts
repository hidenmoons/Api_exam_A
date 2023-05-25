import { Component } from '@angular/core';
import { ClienteService } from './services/cliente.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  clientes: any[] = [];
  title = 'Angular_Exam';

  constructor(private clienteservices: ClienteService){}
  sidebarExpanded = true;
  Getcliente() 
  {
    this.clienteservices.GetClient().subscribe(cliente =>
      {
        this.clientes.push(cliente);
      }); 
      console.log(this.clientes);
  }
}


