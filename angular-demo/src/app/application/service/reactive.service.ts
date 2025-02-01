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
  private API_POSTS = 'https://jsonplaceholder.typicode.com/posts';
  private API_USERS = 'https://randomuser.me/api/?results=5';
  private API_DOGS = 'https://dog.ceo/api/breeds/image/random/3';

  // Subjects para control reactivo
  private postsTrigger = new Subject<void>();
  private usersTrigger = new Subject<void>();
  private dogsTrigger = new Subject<void>();

  // Flujos reactivos
  posts$ = this.postsTrigger.pipe(
    switchMap(() => this.http.get(this.API_POSTS).pipe(
      catchError(() => of({ error: 'Error al cargar posts' }))
    ))
  );

  users$ = this.usersTrigger.pipe(
    switchMap(() => this.http.get(this.API_USERS).pipe(
      catchError(() => of({ error: 'Error al cargar usuarios' }))
    ))
  );

  dogs$ = this.dogsTrigger.pipe(
    switchMap(() => this.http.get(this.API_DOGS).pipe(
      catchError(() => of({ error: 'Error al cargar imágenes' }))
    ))
  );

  // Métodos públicos
  getPosts(): Observable<any> {
    this.postsTrigger.next();
    return this.posts$;
  }

  getUsers(): Observable<any> {
    this.usersTrigger.next();
    return this.users$;
  }

  getDogImages(): Observable<any> {
    this.dogsTrigger.next();
    return this.dogs$;
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
