import { Component, OnInit } from '@angular/core';
import { ICliente } from '../interfaces/cliente';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListClienteComponent } from "../list-cliente/list-cliente.component";

@Component({
  selector: 'app-index-cliente',
  standalone: true,
  imports: [FormsModule, CommonModule, ListClienteComponent],
  templateUrl: './index-cliente.component.html',
  styleUrl: './index-cliente.component.css'
})

export class IndexClienteComponent implements OnInit {

  ngOnInit(): void {
  }

  clienteObj: ICliente = {
    nombre: '',
    credito: 0
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

  //Aqui ya mapeamos la inforamcion de los formularios 
  agregarAngularSubmit() {

    if (this.clienteObj.nombre.trim().length === 0) {
      return;
    }
    if (this.clienteObj.credito === null)
      return;

    this.listClient.push(this.clienteObj);
    console.log(this.clienteObj);
    this.clienteObj = {
      nombre: '',
      credito: 0
    }
  }
}
