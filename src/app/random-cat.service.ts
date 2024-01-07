import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomCatService {

  constructor() { }

  getRandomCat(): string {
    return "test"
  }
}
