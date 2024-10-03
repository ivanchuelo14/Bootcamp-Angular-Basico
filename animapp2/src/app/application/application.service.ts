import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataMap, IAnimap } from './interfaces/IAnimap';
import { Data } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class ApplicationService {

  apikey: string = "MrT7sp76snd6W7G4XR0nnS8qScyG2O5D"
  resultados: DataMap[] = [];
  constructor(private http: HttpClient) { }

  buscarGift(nameGift: string) {
    this.http.get<IAnimap>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apikey}&q=${nameGift}&limit=10`).subscribe(resp => {
      this.resultados = resp.data;
    })
  }
}
