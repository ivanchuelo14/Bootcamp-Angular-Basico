import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {

  private API_USERS = 'https://randomuser.me/api/?results=5';

  constructor(private http: HttpClient) {}

  // ✅ 1. Fetch con Promesas
  getUsersWithFetch(): Promise<any> {
    return fetch(this.API_USERS)
      .then(response => response.json())
      .catch(error => ({ error: 'Error al cargar usuarios' }));
  }

  // ✅ 2. HttpClient con Observables
  getUsersWithHttpClient(): Observable<any> {
    return this.http.get(this.API_USERS).pipe(
      catchError(() => of({ error: 'Error al cargar usuarios' }))
    );
  }

  // ✅ 3. Fetch con Async/Await
  async getUsersWithAsyncAwait(): Promise<any> {
    try {
      const response = await fetch(this.API_USERS);
      return await response.json();
    } catch {
      return { error: 'Error al cargar usuarios' };
    }
  }
}
