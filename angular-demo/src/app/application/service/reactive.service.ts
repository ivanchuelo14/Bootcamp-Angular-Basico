import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, debounceTime, distinctUntilChanged, map, Observable, of, Subject, switchMap } from 'rxjs';
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

  // Flujos reactivos
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

  // Métodos públicos para disparar las solicitudes
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

  getDogBreeds(): Observable<string[]> {
    return this.http.get<{ message: Record<string, string[]> }>('https://dog.ceo/api/breeds/list/all').pipe(
      map(response => Object.keys(response.message)), // Extraer solo los nombres de las razas
      catchError(() => of([])) // En caso de error, devolver un array vacío
    );
  }
  
  // Método para buscar perros
  searchDogs(breed$: Observable<string>): Observable<DogResponse> {
    return breed$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(breed => 
        this.http.get<DogResponse>(`https://dog.ceo/api/breed/${breed}/images`).pipe(
          catchError(() => 
            of({
              status: 'error' as const, // Forzamos el tipo literal 'error'
              message: ['No se encontraron imágenes para esta raza']
            })
          )
        )
      )
    );
  }
}
