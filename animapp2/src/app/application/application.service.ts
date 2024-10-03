import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApplicationService {

  constructor(private http: HttpClient) { }

  buscarGift() {
    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=MrT7sp76snd6W7G4XR0nnS8qScyG2O5D&q=anime').subscribe(resp => {
      console.log(resp);
    })
  }
}
