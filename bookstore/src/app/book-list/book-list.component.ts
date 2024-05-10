import { BookService } from './../services/book.service';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';
import { Book } from '../interfaces/book';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, RouterLink,RouterLinkActive],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export default class BookListComponent implements OnInit {

  //http = inject(HttpClient)
  
  //books: any =[] ;
  books: Book[] =[];
  private bookService = inject(BookService);

  //constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadBooks();
   // this.fetchPosts();

  }
  
  //fetchPosts(){
  //  this.http.get('https://jsonplaceholder.typicode.com/posts?_limit=7')
  //  .subscribe((books: any)=>{
   //   console.log(books);
    //  this.books = books;
   // })
 // }    

//loadBooks(){

  //this.bookService.getBooks().subscribe((books: any)=>{
    //console.log(books);
    //this.books = books;
  //})
//}
loadBooks(){
  this.bookService.getBooks().subscribe({
    next: (books: any)=>{
      this.books = books as Book[];
      console.log('Books fetched succesfully');
    },
    error: (error)=> console.log('Error fetching books', error)
  });
}
}
