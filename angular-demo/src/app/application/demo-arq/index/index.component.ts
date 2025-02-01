import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ReactiveService } from '../../service/reactive.service';
import { Observable, of, filter, switchMap } from 'rxjs';
import { FormControl } from '@angular/forms';
import { DogResponse } from './interfaces/DogResponse';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-index',
  imports: [SharedModule, NgSelectModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})

export class IndexComponent {
  // Control para el buscador de perros
  breedControl = new FormControl('');
  
  // Datos reactivos para perros
  dogData$!: Observable<DogResponse>;
  
  // Propiedades existentes
  selectedData$!: Observable<any>;
  selectedApiTitle: string = '';
  selectedDogs: string[] = [];
  dogBreeds$!: Observable<string[]>;

  constructor(public apiService: ReactiveService) {
    this.dogBreeds$ = this.apiService.getDogBreeds();
    this.dogData$ = this.breedControl.valueChanges.pipe(
      filter((breed): breed is string => !!breed && breed.trim() !== ''),
      switchMap(breed => this.apiService.searchDogs(of(breed)))
    );
  }

  selectDogImage(imageUrl: string): void {
    if (!this.selectedDogs.includes(imageUrl)) {
      this.selectedDogs.push(imageUrl);
    }
  }

  removeDogImage(imageUrl: string): void {
    this.selectedDogs = this.selectedDogs.filter(img => img !== imageUrl);
  }

  // Método para cargar datos según API seleccionada
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
      default:
        this.selectedData$ = of({ error: 'API no válida' });
    }
  }
}
