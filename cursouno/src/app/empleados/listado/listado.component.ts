import { Component, Input } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']  // Corrección aquí
})

export class ListadoComponent {
  etiquetaBorrado: string = '';

  //Hijo recive un valor de otro componente
  @Input() empleados: IEmpleado[] = [];
  @Input() titulo: string = "";

  borrar() {
    const empl = this.empleados.shift();
    if (empl !== undefined) {
      this.etiquetaBorrado = empl.nombres + ' ' + empl.apellidos;
    } else {
      this.etiquetaBorrado = '';
    }
  }
}
