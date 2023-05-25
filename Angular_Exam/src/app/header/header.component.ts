import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cliente:Cliente|any={};

  constructor(private clienteservice:ClienteService) { }

  ngOnInit(): void {
    
  }
  
  login()
  {
    this.clienteservice.login(this.cliente.nombre,this.cliente.correo).subscribe(data => 
      {
        localStorage.setItem('cliente', JSON.stringify(data));
        console.log(data)
      },
      error=>(
        alert("Asegurate que el usuario exista")
      )
        );
  }
  islogin(){
    return this.clienteservice.islogin()
  }
  logoff()
  {
    localStorage.removeItem('cliente');
  }
}
