import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acumulador',
  standalone: true,
  imports: [],
  templateUrl: './acumulador.component.html',
  styleUrl: './acumulador.component.css'
})

export class AcumuladorComponent implements OnInit {

  ngOnInit(): void {
   
  }

  title: string = 'Angular vistas';
  numero: number = 2;

  //Metodos
  Duplicar(){
    this.numero = this.numero * 2;
  }

  Triplicar(){
    this.numero = this.numero * 3;
    
  }

  Reiniciar(){
    this.numero = 2;
  }
}
