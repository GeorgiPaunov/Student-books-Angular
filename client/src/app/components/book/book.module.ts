import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { BookResolver } from '../../core/resolvers/book.resolver';
import { BookDetailsComponent } from './book-details/book-details.component';

const routes: Routes = [
    { path: 'details/:id', component: BookDetailsComponent, resolve: { book: BookResolver } }
];

@NgModule({
    declarations: [
        BookDetailsComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        BookResolver
    ]
})
export class BookModule { }
