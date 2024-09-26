import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexClienteComponent } from './index-cliente/index-cliente.component';
import { FormsModule } from '@angular/forms';
import { ListClienteComponent } from './list-cliente/list-cliente.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IndexClienteComponent,
    FormsModule,
    ListClienteComponent
  ], exports: [
    IndexClienteComponent,
    FormsModule,
    ListClienteComponent
  ]
})
export class ClientesModule { }
