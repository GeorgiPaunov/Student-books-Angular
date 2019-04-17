import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { BookAllComponent } from './components/book/book-all/book-all.component';
import { BookItemComponent } from './components/book/book-item/book-item.component';

import { ResponseInterceptorService } from './core/interceptors/response-interceptor.service';
import { JwtInterceptorService } from './core/interceptors/jwt-interceptor.service';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        HomeComponent,
        BookAllComponent,
        BookItemComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot()
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptorService, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
