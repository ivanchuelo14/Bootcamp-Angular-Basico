import { Component, Input } from '@angular/core';
import { ICliente } from '../interfaces/cliente';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-list-cliente',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './list-cliente.component.html',
  styleUrl: './list-cliente.component.css'
})
export class ListClienteComponent {

  constructor(private clienteService: ClienteService) {
  }

  //Forma de hacerlo con la  inyeccion
  get listCliente(): ICliente[] {
    return this.clienteService.getClientes;
  }

  //@Input()
  // listClient: ICliente[] = []
}
