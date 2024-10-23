import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getAll(): string[] {
    return [
      'Book 1', 
      'Book 2', 
      'Book 3, ./assets/img/Product photo.png'];
  }
}
