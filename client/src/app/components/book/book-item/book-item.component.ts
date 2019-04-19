import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../../core/models/book';
import { AuthenticationService } from '../../../core/services/authentication.service';

@Component({
    selector: 'app-book-item',
    templateUrl: './book-item.component.html',
    styleUrls: ['./book-item.component.css']
})
export class BookItemComponent {
    @Input() book: Book;
    @Output() idToAddEmitter: EventEmitter<string> = new EventEmitter<string>();

    constructor(private authenticationService: AuthenticationService) { }

    get isAuthenticated() {
        return this.authenticationService.isAuthenticated(); 
    }

    get isAdmin() {
        return this.authenticationService.isAdmin();
    }

    emitId() {
        this.idToAddEmitter.emit(this.book._id);
    }
}
