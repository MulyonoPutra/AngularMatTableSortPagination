import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Book } from './book';
import { BooksResponse } from './books-response';
import { ViewOptions } from './view-options';

@Injectable()
export class BooksService {

  fakeDataLength = 5000;

  findBooks(options: ViewOptions): Observable<BooksResponse> {

    console.log('findBooks', options);
    let data = this.mockBooks(this.fakeDataLength);

    data = data.sort((a, b) => {
      const sortOrder = options.sortDirection === 'asc' ? -1 : 1;
      const valueA = a[options.sortField];
      const valueB = b[options.sortField];

      var result = (valueA < valueB) ? -1 : (valueA > valueB) ? 1 : 0;
      return result * sortOrder;
    });

    const start = options.page * options.pageSize;
    const end = start + options.pageSize;
    data = data.slice(start, end);

    return of({
      items: data,
      total: this.fakeDataLength
    });
  }

  mockBooks(amount: number): Book[] {
    let books = [];
    for (let i = 0; i < amount; i++) {
      books.push(this.generateBook(i + 1, this.randomYear()));
    }
    return books;
  }

  randomYear() {
    return Math.floor(Math.random() * 20) + 1990;
  }

  generateBook(position: number, year: number) {
    return <Book>{
      name: "Book " + position,
      author: "Author " + position,
      year: year
    };
  }

}