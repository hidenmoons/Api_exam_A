import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: Cliente | any;
  clienteselect:Cliente |any={};
  modo:string = '';
  constructor(private clienteservice:ClienteService) { }

  ngOnInit(): void {
    this.getcliente();
  }

  getcliente()
  {
    this.clienteservice.GetClient().subscribe(data=>
      {
        console.log(data);
        this.clientes = data
      })
  }
  updateclientes(id:number)
  {

  }
 
  openFormModalupdate(cliente: Cliente) {
    console.log(cliente);
     this.clienteselect = cliente;
     console.log(this.clienteselect);
   }
  deleteclient(id:number)
  {
    console.log(id);
   
    return this.clienteservice.DeleteClient(id)
    .subscribe(()=>{
      this.getcliente();
    });
    
  }
}
