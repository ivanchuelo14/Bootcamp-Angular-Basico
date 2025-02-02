import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PerformanceService } from '../../service/performance.service';
import { isObservable } from 'rxjs';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-performance',
  imports: [SharedModule],
  templateUrl: './performance.component.html',
  styleUrl: './performance.component.scss'
})
export class PerformanceComponent {
  executionResults: { method: string; time: number }[] = [];

  constructor(private performanceService: PerformanceService) {}

  // Lógica para medir tiempos y almacenar resultados
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

  ngOnInit() {
    this.measureAndStore(() => this.performanceService.getUsersWithFetch(), 'Fetch con Promesas');
    this.measureAndStore(() => this.performanceService.getUsersWithHttpClient(), 'HttpClient con RxJS');
    this.measureAndStore(() => this.performanceService.getUsersWithAsyncAwait(), 'Fetch con Async/Await');
  }
}
