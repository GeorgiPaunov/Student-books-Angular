import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { BookResolver } from '../../core/resolvers/book.resolver';
import { AuthorizationGuard } from '../../core/guards/authorization.guard';

import { BookDetailsComponent } from './book-details/book-details.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';

const routes: Routes = [
    { path: 'details/:id', component: BookDetailsComponent, resolve: { book: BookResolver } },
    { path: 'create', component: BookCreateComponent, canActivate: [ AuthorizationGuard ] },
    { 
        path: 'edit/:id', 
        component: BookEditComponent, 
        resolve: { book: BookResolver }, 
        canActivate: [ AuthorizationGuard ] 
    },
    { 
        path: 'delete/:id', 
        component: BookDeleteComponent, 
        resolve: { book: BookResolver }, 
        canActivate: [ AuthorizationGuard ] 
    }
];

@NgModule({
    declarations: [
        BookDetailsComponent,
        BookCreateComponent,
        BookEditComponent,
        BookDeleteComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        BookResolver,
        AuthorizationGuard
    ]
})
export class BookModule { }
