import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../../../core/services/book.service';

@Component({
    selector: 'app-book-create',
    templateUrl: './book-create.component.html',
    styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
    form: FormGroup;

    constructor(private fb: FormBuilder, private bookService: BookService, private router: Router) { }

    ngOnInit() {
        this.form = this.fb.group({
            title: ['', Validators.required],
            grade: ['', [ Validators.required, Validators.min(1), Validators.max(12) ]],
            subject: ['', Validators.required],
            author: [''],
            publisher: ['', Validators.required],
            year: [''],
            imageUrl: ['', Validators.required],
            price: ['', Validators.required],
            description: ['', Validators.maxLength(1000)]
        });
    }

    create() {
        this.bookService.create(this.form.value).subscribe(() => {
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
