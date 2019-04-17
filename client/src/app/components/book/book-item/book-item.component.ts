import { Component, Input } from '@angular/core';
import { Book } from '../../../core/models/book';
import { AuthenticationService } from '../../../core/services/authentication.service';

@Component({
    selector: 'app-book-item',
    templateUrl: './book-item.component.html',
    styleUrls: ['./book-item.component.css']
})
export class BookItemComponent {
    @Input() book: Book;

    constructor(private authenticationService: AuthenticationService) { }

    get isAuthenticated() {
        return this.authenticationService.isAuthenticated(); 
    }

    get isAdmin() {
        return this.authenticationService.isAdmin();
    }
}
