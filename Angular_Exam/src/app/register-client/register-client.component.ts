import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente.model';
import { FormGroup, FormBuilder,Validator,FormControl  } from '@angular/forms';
import { firstValueFrom } from 'rxjs'
import { Form } from '@angular/forms';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {

  usuario: Cliente|any ={};
  constructor(private clienteservice: ClienteService) { }

  ngOnInit(): void {
    this.Getcliente()
  }
  
crearUsuario() {
  const usuario = { nombre: this.usuario.nombre, apellidos: 
    this.usuario.apellidos, direccion: this.usuario.direccion,correo:this.usuario.correo};
  
  this.clienteservice.create(usuario).subscribe(
    response => {
      // Manejar la respuesta exitosa
      console.log(response);
    },
    error => {
      // Manejar el error
      alert('el correo debe de ser unico');
      console.error(error);
    }
  );
}
  Getcliente() 
  {
    this.clienteservice.GetClient().subscribe; 
  }
}
