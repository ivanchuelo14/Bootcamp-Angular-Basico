import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, debounceTime, distinctUntilChanged, firstValueFrom, map, Observable, of, Subject, switchMap } from 'rxjs';
import { DogResponse } from '../demo-arq/index/interfaces/DogResponse';

@Injectable({
  providedIn: 'root'
})
export class ReactiveService {
  private http = inject(HttpClient);

  // URLs de APIs de ejemplo
  private API_USERS = 'https://randomuser.me/api/?results=5';
  private API_JOKES = 'https://api.chucknorris.io/jokes/random';
  private API_ADVICE = 'https://api.adviceslip.com/advice';

  // Subjects para control reactivo
  private usersTrigger = new Subject<void>();
  private jokesTrigger = new Subject<void>();
  private adviceTrigger = new Subject<void>();

  // Flujos reactivos (Observables)
  users$ = this.usersTrigger.pipe(
    switchMap(() =>
      this.http.get(this.API_USERS).pipe(
        catchError(() => of({ error: 'Error al cargar usuarios' }))
      )
    )
  );

  jokes$ = this.jokesTrigger.pipe(
    switchMap(() =>
      this.http.get(this.API_JOKES).pipe(
        catchError(() => of({ error: 'Error al cargar chistes' }))
      )
    )
  );

  advice$ = this.adviceTrigger.pipe(
    switchMap(() =>
      this.http.get(this.API_ADVICE).pipe(
        catchError(() => of({ error: 'Error al cargar consejos' }))
      )
    )
  );

  // Métodos públicos para disparar las solicitudes (Observable)
  getUsers(): Observable<any> {
    this.usersTrigger.next();
    return this.users$;
  }

  getJokes(): Observable<any> {
    this.jokesTrigger.next();
    return this.jokes$;
  }

  getAdvice(): Observable<any> {
    this.adviceTrigger.next();
    return this.advice$;
  }

  // Método para obtener las razas de perros (Observable)
  getDogBreeds(): Observable<string[]> {
    return this.http.get<{ message: Record<string, string[]> }>('https://dog.ceo/api/breeds/list/all').pipe(
      map(response => Object.keys(response.message)),
      catchError(() => of([]))
    );
  }
  
  // Método para buscar perros (Observable)
  searchDogs(breed$: Observable<string>): Observable<DogResponse> {
    return breed$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(breed => 
        this.http.get<DogResponse>(`https://dog.ceo/api/breed/${breed}/images`).pipe(
          catchError(() => 
            of({
              status: 'error' as const,
              message: ['No se encontraron imágenes para esta raza']
            })
          )
        )
      )
    );
  }

  // Método para buscar perros por raza observable de otra manera 
  searchDog(breed: string): Observable<DogResponse> {
      return this.http.get<DogResponse>(`https://dog.ceo/api/breeds/image/random/4?breed=${breed}`);
  }

  // Métodos adicionales usando Promesas (enfoque basado en promesas)
  async getUsersPromise(): Promise<any> {
    try {
      //firstValueFrom para convertir el observable en una promesa
      return await firstValueFrom(this.http.get(this.API_USERS));
    } catch (error) {
      return { error: 'Error al cargar usuarios (Promise)' };
    }
  }

  async getJokesPromise(): Promise<any> {
    try {
      return await firstValueFrom(this.http.get(this.API_JOKES));
    } catch (error) {
      return { error: 'Error al cargar chistes (Promise)' };
    }
  }

  async getAdvicePromise(): Promise<any> {
    try {
      return await firstValueFrom(this.http.get(this.API_ADVICE));
    } catch (error) {
      return { error: 'Error al cargar consejos (Promise)' };
    }
  }

  // Ejemplo básico usando suscripción (Callback) – NO RECOMENDADO para lógica en servicios,
  getUsersWithSubscription(callback: (data: any) => void): void {
    this.http.get(this.API_USERS).subscribe({
      next: (data) => callback(data),
      error: () => callback({ error: 'Error al cargar usuarios (Callback)' })
    });
  }
}