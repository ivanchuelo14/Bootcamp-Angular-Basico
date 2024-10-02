import { Component, OnInit } from '@angular/core';
import { ICliente } from '../interfaces/cliente';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListClienteComponent } from "../list-cliente/list-cliente.component";
import { AgregarClienteComponent } from '../agregar-cliente/agregar-cliente.component';

@Component({
  selector: 'app-index-cliente',
  standalone: true,
  imports: [FormsModule, CommonModule, ListClienteComponent, AgregarClienteComponent],
  templateUrl: './index-cliente.component.html',
  styleUrl: './index-cliente.component.css'
})

export class IndexClienteComponent implements OnInit {

  ngOnInit(): void {
  }

  listClient: ICliente[] = [
    {
      nombre: "Carlos",
      credito: 100
    },
    {
      nombre: "Ivan",
      credito: 200
    }
  ]

  agregarFormJs(evento: any) {
    //Evita que no refresque la pantalla :O ajjaja esto es JS puro
    evento?.preventDefault();
    console.log("Eu");
  }

  agregarNuevoCliente(cliente: ICliente) {
    this.listClient.push(cliente);
  }

}
