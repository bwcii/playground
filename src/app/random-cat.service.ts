import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomCatService {

  apiURL = 'https://myip.bwcii.com';

  constructor() { }

  getRandomCat(): string {
    return "After"
  }
}
