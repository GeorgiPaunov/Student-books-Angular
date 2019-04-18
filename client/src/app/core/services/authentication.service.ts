import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private readonly loginUrl = 'http://localhost:9999/users/login';
    private readonly registerUrl = 'http://localhost:9999/users/register';

    constructor(private http: HttpClient, private router: Router, public toastr: ToastrService) { }

    register(body) {
        return this.http.post(this.registerUrl, body);
    }

    login(body) {
        return this.http.post(this.loginUrl, body);
    }

    logout() {
        this.toastr.success('Goodby, ' + localStorage.getItem('username') + '!', 'Success!')
        this.router.navigate([ '/home' ]);
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
