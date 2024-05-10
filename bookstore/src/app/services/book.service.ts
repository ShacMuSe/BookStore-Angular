import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../interfaces/book';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=7';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(BASE_URL).pipe(
      map(books => books.map(book => ({ ...book, imageUrl: `/assets/Images/${book.id}.jpg` })))
    );
  }

  getBook(id: number): Observable<Book | undefined> {
    return this.getBooks()
      .pipe(
        map((books: Book[]) => books.find(book => book.id === id))
      );
  }
}
