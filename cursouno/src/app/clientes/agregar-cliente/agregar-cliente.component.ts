import { Component, EventEmitter, Output, output } from '@angular/core';
import { ICliente } from '../interfaces/cliente';
import { FormsModule } from '@angular/forms';

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

  //Envia y con on inicial
  @Output()
  onNuevoCliente: EventEmitter<ICliente> = new EventEmitter();

  agregarAngularSubmit() {

    if (this.clienteObj.nombre.trim().length === 0) {
      return;
    }
    if (this.clienteObj.credito === null)
      return;

    //Envia el valor a otro componente
    this.onNuevoCliente.emit(this.clienteObj);

    this.clienteObj = {
      nombre: '',
      credito: 0
    }
  }
}
