import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListService } from '../../../core/services/list.service';

@Component({
    selector: 'app-list-create',
    templateUrl: './list-create.component.html',
    styleUrls: ['./list-create.component.css']
})
export class ListCreateComponent implements OnInit {
    form: FormGroup;

    constructor(private fb: FormBuilder, private listService: ListService, private router: Router) { }

    ngOnInit() {
        this.form = this.fb.group({
            title: ['', Validators.required]
        });
    }

    create() {
        this.listService.create(this.form.value).subscribe(() => {
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
