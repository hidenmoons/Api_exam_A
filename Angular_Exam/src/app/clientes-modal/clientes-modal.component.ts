import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { ClienteService } from '../services/cliente.service';
@Component({
  selector: 'app-clientes-modal',
  templateUrl: './clientes-modal.component.html',
  styleUrls: ['./clientes-modal.component.css']
})
export class ClientesModalComponent implements OnInit {
   clientes: Cliente|any;
   @Input() clienteselect:Cliente |any={};

  @Input() modo: string|any;
  constructor(private clienteservice:ClienteService) { }

  ngOnInit(): void {
    console.log(this.clienteselect)
  }
  
  updateClient()
  {
    console.log(this.clienteselect.clienteId)
    return this.clienteservice.updateClient(this.clienteselect.clienteId,this.clienteselect).subscribe(
    )
  }
}
