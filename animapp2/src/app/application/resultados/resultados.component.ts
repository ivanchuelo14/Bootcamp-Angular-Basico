import { Component } from '@angular/core';
import { ApplicationService } from '../application.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resultados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.css'
})
export class ResultadosComponent {

  constructor(private applicationService: ApplicationService) {
  }

  get resultados() {
    return this.applicationService.resultados;
  }
}
