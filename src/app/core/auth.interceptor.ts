import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        console.log('aaaaa');
        const token: string | undefined = localStorage[AuthService.LOCAL_STORAGE_TOKEN_KEY]

        if (token) {
            const clonedReq = request.clone({
                headers: request.headers.set('Authorization', token)
            })

            return next.handle(clonedReq);
        } else {
            return next.handle(request);
        }
    }
}
