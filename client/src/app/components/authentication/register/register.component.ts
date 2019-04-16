import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../core/services/authentication.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    form: FormGroup;

    constructor(
        private fb: FormBuilder, 
        private router: Router, 
        private authService: AuthenticationService) { }

    ngOnInit() {
        this.form = this.fb.group({
            email: ['', [ Validators.required, Validators.email ]],
            username: ['', Validators.required],
            password: ['', [ Validators.required, Validators.minLength(5) ]]
        });
    }

    register() {
        this.authService.register(this.form.value).subscribe(() => {
            this.router.navigate([ '/users/login' ]);
        });
    }

    get f() {
        return this.form.controls;
    }

    get invalid() {
        return this.form.invalid;
    }
}
