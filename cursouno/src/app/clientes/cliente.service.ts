import { Injectable } from '@angular/core';
import { ICliente } from './interfaces/cliente';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  //Se reconoce como clase privada
  private _listClient: ICliente[] = []

  get getClientes(): ICliente[] {
    return this._listClient
  }

  agregarCliente(cliente: ICliente) {
    this._listClient.push(cliente);
    //Guardar en local storage como json
    localStorage.setItem('clientes', JSON.stringify(this._listClient))
  }

  constructor() {
    if (typeof window !== 'undefined') {
      this._listClient = JSON.parse(localStorage.getItem('clientes')!) || [];
    } else {
      this._listClient = [];
    }
  }
}
