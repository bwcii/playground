import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomCatService {

  apiURL = 'https://playground-api.bwcii.com';

  constructor(private http: HttpClient) { }

  getRandomCat(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}/randomCats`);
  }
}
