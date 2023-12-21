import { Injectable } from '@angular/core';
import { IBook } from '../interfaces/Ibook';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private _books: IBook[] = [
    {
      id: 1,
      name: 'RxJS in Action',
      genre: 'Programming',
      detail:
        'Book about the application of the RxJS (Reactive Extension for JavaScript) library for solving of real world web development problems.',
      imageUrl:
        'https://images.manning.com/book/9/5ff3611-f62f-47cb-a977-2967da49b079/Daniels-RxJS-HI.png',
    },

    {
      id: 2,
      name: 'Functional Programming in JavaScipt',
      genre: 'Programming',
      detail: 'Book about the Functional programming in JavaScript.',
      imageUrl:
        'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781617292828/functional-programming-in-javascript-9781617292828_hr.jpg',
    },
    {
      id: 3,
      name: 'War and Peace',
      genre: 'Classical Literature',
      detail:
        'Book about some characters in Russia in the period of the Napolean war',
      imageUrl:
        'https://cdn.kobo.com/book-images/3ac03eac-d437-47e3-9b15-52542edabd56/1200/1200/False/war-and-peace-34.jpg',
    },
    {
      id: 4,
      name: 'Crime and Punishment',
      genre: 'Classical Literature',
      detail:
        'Book about a Russian student who felt the end justified the means',
      imageUrl:
        'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781684122905/crime-and-punishment-9781684122905_hr.jpg',
    },
  ];

  getBooks() {
    return [...this._books];
  }

  constructor() {}

  getBook(id: number) {
    return { ...this._books.find((book) => book.id === id) };
  }
}
