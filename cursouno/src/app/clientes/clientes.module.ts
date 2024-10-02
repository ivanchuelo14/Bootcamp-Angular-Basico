import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexClienteComponent } from './index-cliente/index-cliente.component';
import { FormsModule } from '@angular/forms';
import { ListClienteComponent } from './list-cliente/list-cliente.component';
import { ClienteService } from './cliente.service';

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
  ],
  providers:[
    ClienteService
  ]
})
export class ClientesModule { }
