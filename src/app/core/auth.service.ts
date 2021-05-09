import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/entities/User';
import { SharedService } from '../shared/shared.service';
import { tap } from 'rxjs/operators';
import { LoginResponse } from './entities/login-response';

@Injectable()
export class AuthService {
    public static readonly LOCAL_STORAGE_TOKEN_KEY: string = 'auth-token';

    private apiBase: string;

    constructor (
        private sharedService: SharedService,
        private http: HttpClient
    ) {
        this.apiBase = this.sharedService.apiBase;
    }

    public login(user: User): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(`${this.apiBase}/login`, user).pipe(
            tap(this.setSession)
        )
    }

    public logout(): void {
        localStorage.removeItem(AuthService.LOCAL_STORAGE_TOKEN_KEY);
    }

    public loggedIn(): boolean {
        return localStorage[AuthService.LOCAL_STORAGE_TOKEN_KEY]
    }

    private setSession(res: LoginResponse): void {
        localStorage.setItem(AuthService.LOCAL_STORAGE_TOKEN_KEY, res.token)
    }
}
