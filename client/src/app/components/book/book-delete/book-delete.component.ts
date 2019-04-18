import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Book } from '../../../core/models/book';
import { BookService } from '../../../core/services/book.service';

@Component({
    selector: 'app-book-delete',
    templateUrl: './book-delete.component.html',
    styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
    book: Book;
    form: FormGroup;

    constructor(private route: ActivatedRoute, private fb: FormBuilder,
        private bookService: BookService, private router: Router) { }

    ngOnInit() {
        this.book = this.route.snapshot.data['book']['book'];

        this.form = this.fb.group({
            title: [this.book.title],
            grade: [this.book.grade],
            subject: [this.book.subject],
            author: [this.book.author],
            publisher: [this.book.publisher],
            year: [this.book.year],
            imageUrl: [this.book.imageUrl],
            price: [this.book.price],
            description: [this.book.description]
        });
    }

    delete() {
        this.bookService.delete(this.book._id).subscribe(() => {
            this.router.navigate([ '/home' ]);
        });
    }
}
