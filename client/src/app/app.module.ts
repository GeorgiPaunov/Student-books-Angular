import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { HomeComponent } from './components/home/home/home.component';

import { ResponseInterceptorService } from './core/interceptors/response-interceptor.service';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot()
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptorService, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
