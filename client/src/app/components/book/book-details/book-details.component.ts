import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/core/models/book';

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
    book: Book;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.book = this.route.snapshot.data['book']['book'];
    }

}
