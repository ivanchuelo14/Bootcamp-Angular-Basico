import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-numeros',
  standalone: true,
  imports: [CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule],
  templateUrl: './numeros.component.html',
  styleUrl: './numeros.component.scss'
})
export class NumerosComponent {

  totalVentas: number = 25555555555.245355;
  porcentajeVentas: number = 0.56;


  constructor() {
  }
}
