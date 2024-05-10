import { Book } from './../interfaces/book';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import { Router } from 'express';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export default class BookDetailsComponent implements OnInit {

  book: Book | undefined;
  errorMessage = '';
  selectedQuantity: number = 1;
  quantityOptions: number[] = Array.from({ length: 10 }, (_, i) => i + 1);

  constructor(private route: ActivatedRoute,
    private BookService: BookService) {
}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getBook(id);
    }
  }

  getBook(id: number): void {
    this.BookService.getBook(id).subscribe({
      next: book => this.book = book,
      error: err => this.errorMessage = err
    });
  }
}

