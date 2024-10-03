import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  buscar: string = ''

  constructor(private applicationService: ApplicationService) { }

  busqueda() {
    this.applicationService.buscarGift(this.buscar);
  }
}
