import { Component } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';
import { ListadoComponent } from '../listado/listado.component';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [ListadoComponent],
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']  // Corrección aquí
})
export class EmpleadoComponent {

  tituloAntiguo: string = "Empleado Antiguo";
  tituloNuevo: string = "Empleado Nuevo";
  
  empleadosAntiguos: IEmpleado[] = [
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

  empleadosNuevos: IEmpleado[] = [
    {
      nombres: 'Yenny',
      apellidos: 'Guerra',
      direccion: 'asdasdasdddd',
      sueldo: 9000
    }

  ];
}
