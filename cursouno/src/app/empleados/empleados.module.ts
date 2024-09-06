import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { EmpleadoComponent } from './empleado/empleado.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListadoComponent, 
    EmpleadoComponent
  ], exports:[ 
    ListadoComponent, 
    EmpleadoComponent
  ]
})

export class EmpleadosModule { }
