import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../../core/models/book';
import { BookService } from '../../../core/services/book.service';

@Component({
    selector: 'app-book-all',
    templateUrl: './book-all.component.html',
    styleUrls: ['./book-all.component.css']
})
export class BookAllComponent implements OnInit {
    book$: Observable<Array<Book>>;

    constructor(private bookService: BookService) { }

    ngOnInit() {
        this.book$ = this.bookService.getAll();
    }

}
