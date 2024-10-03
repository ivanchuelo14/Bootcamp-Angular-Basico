import { Component } from '@angular/core';
import { BusquedaComponent } from '../busqueda/busqueda.component';
import { ResultadosComponent } from '../resultados/resultados.component';

@Component({
  selector: 'app-pagina-inicio',
  standalone: true,
  imports: [BusquedaComponent, ResultadosComponent],
  templateUrl: './pagina-inicio.component.html',
  styleUrl: './pagina-inicio.component.css'
})
export class PaginaInicioComponent {

}
