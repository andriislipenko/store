import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HelloMessage } from './entities/hello-message';
import { HomeModule } from './home.module';

@Injectable()
export class HomeService {
    constructor (private http: HttpClient) {}

    public getHelloMessage(): Observable<HelloMessage> {
        return this.http.get<HelloMessage>('http://localhost:3000/home');
    }
}
