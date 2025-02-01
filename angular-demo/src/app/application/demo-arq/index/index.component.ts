import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ReactiveService } from '../../service/reactive.service';
import { Observable, of, filter } from 'rxjs';
import { FormControl } from '@angular/forms';
import { DogResponse } from './interfaces/DogResponse';


@Component({
  selector: 'app-index',
  imports: [SharedModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  // Control para el buscador de perros
  breedControl = new FormControl('');
  
  // Datos reactivos para perros
  dogData$!: Observable<DogResponse>;
  
  // Mantenemos tus propiedades existentes
  selectedData$!: Observable<any>;
  selectedApiTitle: string = '';


  constructor(public apiService: ReactiveService) {
    // Configuramos el buscador de perros
    this.dogData$ = this.apiService.searchDogs(
      this.breedControl.valueChanges.pipe(
        filter((term): term is string => !!term && term.trim() !== '')
      )
    );
  }

  // Método existente para botones
  loadData(apiType: string): void {
    switch(apiType) {
      case 'api1':
        this.selectedApiTitle = 'Posts de JSONPlaceholder';
        this.selectedData$ = this.apiService.getPosts();
        break;
      case 'api2':
        this.selectedApiTitle = 'Usuarios Aleatorios';
        this.selectedData$ = this.apiService.getUsers();
        break;
      case 'api3':
        this.selectedApiTitle = 'Nombres de Perros';
        this.selectedData$ = this.apiService.getDogImages();
        break;
      default:
        this.selectedData$ = of({ error: 'API no válida' });
    }
  }
}