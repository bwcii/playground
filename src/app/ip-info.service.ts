import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IpInfoService {

  apiURL = 'https://playground-api.bwcii.com';

  constructor(private http: HttpClient) { }

  getClientIP(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}/randomCats`);
  }
}
