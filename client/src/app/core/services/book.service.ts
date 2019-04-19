import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    private readonly getAllUrl = 'http://localhost:9999/books';
    private readonly getOneUrl = 'http://localhost:9999/books/details/';
    private readonly createUrl = 'http://localhost:9999/books/create';
    private readonly updateUrl = 'http://localhost:9999/books/edit/';
    private readonly deleteUrl = 'http://localhost:9999/books/delete/';

    constructor(private http: HttpClient) { }

    getAll(): Observable<Array<Book>> {
        return this.http.get<Array<Book>>(this.getAllUrl);
    }

    getOne(id): Observable<Book> {
        return this.http.get<Book>(this.getOneUrl + id);
    }

    create(data) {
        return this.http.post(this.createUrl, data);
    }

    edit(id, data) {
        return this.http.put(this.updateUrl + id, data);
    }

    delete(id) {
        return this.http.delete(this.deleteUrl + id);
    }
}
