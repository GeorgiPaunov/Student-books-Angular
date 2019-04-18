import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Book } from '../../../core/models/book';
import { BookService } from '../../../core/services/book.service';

@Component({
    selector: 'app-book-edit',
    templateUrl: './book-edit.component.html',
    styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
    book: Book;
    form: FormGroup;

    constructor(private route: ActivatedRoute, private fb: FormBuilder, 
        private bookService: BookService, private router: Router) { }

    ngOnInit() {
        this.book = this.route.snapshot.data['book']['book'];

        this.form = this.fb.group({
            title: [this.book.title, Validators.required],
            grade: [this.book.grade, [ Validators.required, Validators.min(1), Validators.max(12) ]],
            subject: [this.book.subject, Validators.required],
            author: [this.book.author],
            publisher: [this.book.publisher, Validators.required],
            year: [this.book.year],
            imageUrl: [this.book.imageUrl, Validators.required],
            price: [this.book.price, Validators.required],
            description: [this.book.description, Validators.maxLength(1000)]
        });
    }

    edit() {
        this.bookService.edit(this.book._id, this.form.value).subscribe(() => {
            this.router.navigate([ '/home' ]);
        });
    }

    get f() {
        return this.form.controls;
    }

    get invalid() {
        return this.form.invalid;
    }
}
