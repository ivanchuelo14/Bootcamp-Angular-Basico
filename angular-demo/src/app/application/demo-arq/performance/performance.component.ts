import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { PerformanceService } from '../../service/performance.service';
import { isObservable } from 'rxjs';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveService } from '../../service/reactive.service';

@Component({
  selector: 'app-performance',
  imports: [SharedModule],
  templateUrl: './performance.component.html',
  styleUrl: './performance.component.scss'
})
export class PerformanceComponent implements OnInit {
  
  executionResults: { method: string; time: number }[] = [];
  searchForm!: FormGroup;
  dogData: any[] = [];
  searchError: boolean = false;

  constructor(
    private performanceService: PerformanceService,
    private reactiveService: ReactiveService,
    private fb: FormBuilder
  ) {}

  // Inicializamos el formulario reactivo
  ngOnInit() {
    this.searchForm = this.fb.group({
      breed: ['', [Validators.required, Validators.minLength(3)]],
      info: [''] // Segundo input agregado
    });

    // Medir los tiempos de las APIs
    this.measureAndStore(() => this.performanceService.getUsersWithFetch(), 'Fetch con Promesas');
    this.measureAndStore(() => this.performanceService.getUsersWithHttpClient(), 'HttpClient con RxJS');
    this.measureAndStore(() => this.performanceService.getUsersWithHttpClientSinPipe(), 'HttpClient con RxJS sin pipe');
    this.measureAndStore(() => this.performanceService.getUsersWithAsyncAwait(), 'Fetch con Async/Await');
  }

  // Función para medir el tiempo de ejecución de cada método
  async measureAndStore(method: () => Promise<any> | Observable<any>, methodName: string) {
    const startTime = performance.now();
    const result = method();

    if (isObservable(result)) {
      // Si el resultado es un Observable, nos suscribimos a él
      result.subscribe(() => {
        const endTime = performance.now();
        this.executionResults.push({ method: methodName, time: endTime - startTime });
      });
    } else {
      // Si el resultado es un Promise, lo esperamos con await
      await result;
      const endTime = performance.now();
      this.executionResults.push({ method: methodName, time: endTime - startTime });
    }
  }

  onSubmit() {
    if (this.searchForm.valid) {
      const breed = this.searchForm.get('breed')?.value;
  
      // Llamada al servicio para obtener los datos
      this.reactiveService.searchDog(breed).pipe(
        switchMap(dogs => {
          // Simula el retraso de la búsqueda
          const dogImages = dogs?.message || [];
          return of(dogImages);
        }),
        catchError(error => {
          this.searchError = true;
          return of([]); 
        })
      ).subscribe(dogImages => {
        this.dogData = dogImages; 
        this.searchError = false;
      });
    }
  }

  onReset() {
    this.searchForm.reset();
    this.dogData = [];
    this.searchError = false;
  }
}