import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Injectable()
export class BookResolver implements Resolve<Book> {
    
    constructor(private bookService: BookService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'];

        return this.bookService.getOne(id);
    }
}