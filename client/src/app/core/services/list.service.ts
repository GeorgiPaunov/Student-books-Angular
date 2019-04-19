import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { List } from '../models/list';

@Injectable({
    providedIn: 'root'
})
export class ListService {
    private readonly getUsersListsUrl = 'http://localhost:9999/lists/myLists';
    private readonly createUrl = 'http://localhost:9999/lists/create';
    private readonly deleteUrl = 'http://localhost:9999/lists/delete/';
    private readonly getOneUrl = 'http://localhost:9999/lists/details/';
    private readonly addBookUrl = 'http://localhost:9999/lists/add';
    private readonly removeBookUrl = 'http://localhost:9999/lists/remove'

    constructor(private http: HttpClient) { }

    getUsersLists(): Observable<Array<List>> {
        return this.http.get<Array<List>>(this.getUsersListsUrl);
    }

    create(data) {
        return this.http.post(this.createUrl, data);
    }

    getOne(id): Observable<List> {
        return this.http.get<List>(this.getOneUrl + id);
    }

    delete(id) {
        return this.http.delete(this.deleteUrl + id);
    }

    addBook(data) {
        return this.http.put(this.addBookUrl, data);
    }

    removeBook(data) {
        return this.http.put(this.removeBookUrl, data);
    }
}
