import { Component, EventEmitter, Output, output } from '@angular/core';
import { ICliente } from '../interfaces/cliente';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-agregar-cliente',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar-cliente.component.html',
  styleUrl: './agregar-cliente.component.css'
})

export class AgregarClienteComponent {

  clienteObj: ICliente = {
    nombre: '',
    credito: 0
  }

  constructor(private clienteService: ClienteService) {
  }

  //Envia y con on inicial
  // @Output()
  // onNuevoCliente: EventEmitter<ICliente> = new EventEmitter();

  agregarAngularSubmit() {

    if (this.clienteObj.nombre.trim().length === 0) {
      return;
    }
    if (this.clienteObj.credito === null)
      return;

    //Envia el valor a otro componente con decoraor
    // this.onNuevoCliente.emit(this.clienteObj);

    //Con servicio
    this.clienteService.agregarCliente(this.clienteObj);

    this.clienteObj = {
      nombre: '',
      credito: 0
    }
  }
}
