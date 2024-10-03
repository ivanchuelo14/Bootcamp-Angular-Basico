import { Routes } from '@angular/router';
import { BasicosComponent } from './principal/basicos/basicos.component';
import { NumerosComponent } from './principal/numeros/numeros.component';
import { OtrosComponent } from './principal/otros/otros.component';

//Version 16 para adelante funciona de esta manera
export const routes: Routes = [
    { path: '', component: BasicosComponent, pathMatch: 'full' },
    { path: 'numeros', component: NumerosComponent },
    { path: 'otros', component: OtrosComponent },
    { path: '**', redirectTo: '' }  // Redirige a la raíz para rutas no encontradas
];
