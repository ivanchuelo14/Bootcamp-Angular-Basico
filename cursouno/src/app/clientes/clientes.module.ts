import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexClienteComponent } from './index-cliente/index-cliente.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IndexClienteComponent,
    FormsModule
  ], exports: [
    IndexClienteComponent,
    FormsModule
  ]
})
export class ClientesModule { }
