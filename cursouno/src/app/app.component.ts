import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AcumuladorComponent } from "./acumulador/acumulador.component";
import { ListadoComponent } from "./empleados/listado/listado.component";
import { EmpleadoComponent } from "./empleados/empleado/empleado.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AcumuladorComponent, ListadoComponent, EmpleadoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Cambiado 'styleUrl' a 'styleUrls'
})

export class AppComponent {

}