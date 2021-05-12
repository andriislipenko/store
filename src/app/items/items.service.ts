import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from '../shared/shared.service';
import { Item } from './entities/item';

@Injectable()
export class ItemsService {
    private apiBase: string;

    constructor(
        private sharedService: SharedService,
        private http: HttpClient
    ) {
        this.apiBase = this.sharedService.apiBase;
    }

    public getItems(): Observable<Item[]> {
        return this.http.get<Item[]>(`${this.apiBase}`);
    }
}
