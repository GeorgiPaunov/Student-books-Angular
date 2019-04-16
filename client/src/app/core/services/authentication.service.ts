import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private readonly loginUrl = 'http://localhost:9999/users/login';
    private readonly registerUrl = 'http://localhost:9999/users/register';

    constructor(private http: HttpClient) { }

    register(body) {
        return this.http.post(this.registerUrl, body);
    }

    login(body) {
        return this.http.post(this.loginUrl, body);
    }

    logout() {
        localStorage.clear();
    }

    isAuthenticated() {
        return localStorage.getItem('token') !== null;
    }

    isAdmin() {
        return JSON.parse(localStorage.getItem('isAdmin'));
    }

    getToken() {
        return localStorage.getItem('token');
    }
}
