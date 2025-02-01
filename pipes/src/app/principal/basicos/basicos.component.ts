import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-basicos',
  standalone: true,
  imports: [CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule],
  templateUrl: './basicos.component.html',
  styleUrl: './basicos.component.scss'
})

export class BasicosComponent {

  nombre: string = "carlos";
  apellido: string = "Piedra";
  nombreCompleto: string = this.nombre + " " + this.apellido;

  fecha: Date = new Date();
}
