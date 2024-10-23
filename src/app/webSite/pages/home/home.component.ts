import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  books: string[] = [];
  constructor(
    private bookService: BookService
  ){ 

  }

  ngOnInit(): void {
    this.books = this.bookService.getAll();
  }

}
