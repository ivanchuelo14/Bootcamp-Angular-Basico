import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-otros',
  standalone: true,
  imports: [CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule],
  templateUrl: './otros.component.html',
  styleUrl: './otros.component.scss'
})

export class OtrosComponent {
  nombre: string = "Carmen";
  genero: string = "femenino";

  usuarios: string[] = ['Carlos', 'Roberto', 'Marcela'];

  bienvenidoMapa = {
    'masculino': 'Bienvenido',
    'femenino': 'Bienvenida'
  }

  usuariosMapa = {
    '=0': 'No hay Usuarios en Linea',
    '=1': 'Tenemos un Usuario en Linea',
    '=2': 'Tenemos 2 Usuarios en Linea',
    'other': 'Tenemos # Usuarios en Linea'
  }
}
