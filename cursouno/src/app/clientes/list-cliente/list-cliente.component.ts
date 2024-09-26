import { Component, Input } from '@angular/core';
import { ICliente } from '../interfaces/cliente';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-cliente',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './list-cliente.component.html',
  styleUrl: './list-cliente.component.css'
})
export class ListClienteComponent {

  @Input()
  listClient: ICliente[] = []
}
