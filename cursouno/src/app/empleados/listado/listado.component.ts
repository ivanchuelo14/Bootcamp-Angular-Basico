import { Component } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

  etiquetaBorrado: string = '';

  empleados: IEmpleado[] = [
    {
      nombres: 'carlos',
      apellidos: 'guerra',
      direccion: 'asdasdad',
      sueldo: 5000
    },
    {
      nombres: 'ivan',
      apellidos: 'cordoba',
      direccion: 'asdasdadddddd',
      sueldo: 4000
    },
    {
      nombres: 'mildred',
      apellidos: 'beatriz',
      direccion: 'Eu',
      sueldo: 3000
    }
  ];

  borrar(){    
    const empl = this.empleados.shift();
    if (empl !== undefined) {
      this.etiquetaBorrado = empl?.nombres + '' + empl?.apellidos;      
    } else {
      this.etiquetaBorrado = '';
    }
  }
}
