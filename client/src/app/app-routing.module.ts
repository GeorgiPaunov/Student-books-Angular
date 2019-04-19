import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AuthenticationGuard } from './core/guards/authentication.guard';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { 
        path: 'users', 
        loadChildren: './components/authentication/authentication.module#AuthenticationModule'
    },
    {
        path: 'books',
        loadChildren: './components/book/book.module#BookModule',
        canLoad: [ AuthenticationGuard ]
    },
    {
        path: 'lists',
        loadChildren: './components/list/list.module#ListModule',
        canLoad: [ AuthenticationGuard ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
