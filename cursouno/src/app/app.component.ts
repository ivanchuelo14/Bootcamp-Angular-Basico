import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AcumuladorComponent } from "./acumulador/acumulador.component";
import { EmpleadosModule } from './empleados/empleados.module';
import { ClientesModule } from './clientes/clientes.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AcumuladorComponent, EmpleadosModule, ClientesModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Cambiado 'styleUrl' a 'styleUrls'
})

export class AppComponent {

}