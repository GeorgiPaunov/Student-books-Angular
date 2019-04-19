import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ResponseInterceptorService implements HttpInterceptor {

    constructor(public toastr: ToastrService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(tap(success => {
                if (success instanceof HttpResponse) {
                    if (success.url.endsWith('register') || success.url.endsWith('login')
                        || success.url.endsWith('create') || success.url.includes('edit') 
                        || success.url.includes('delete') || success.url.endsWith('add') 
                        || success.url.endsWith('remove')) {
                            
                        this.toastr.success(success['body']['message'], 'Success!');
                    }
                }
            }), catchError(err => {
                if (err.error.errors) {
                    Object.values(err.error.errors)
                        .forEach(current => this.toastr.error(current.toString(), 'Error!'));
                } else {
                    this.toastr.error(err.error.message, 'Error!');
                }

                throw err;
            }));
    }
}
