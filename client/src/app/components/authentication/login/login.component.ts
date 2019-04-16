import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../core/services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private authService: AuthenticationService) { }

    ngOnInit() {
        this.form = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {
        this.authService.login(this.form.value).subscribe((data) => {
            localStorage.setItem('token', data['token']);
            localStorage.setItem('username', data['username']);
            localStorage.setItem('isAdmin', data['isAdmin']);

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
