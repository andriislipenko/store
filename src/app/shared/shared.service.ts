import { Injectable } from '@angular/core';
import * as appsettings from '../../assets/appsettings.json';

@Injectable()
export class SharedService {
    public apiBase: string;

    constructor() {
        this.apiBase = appsettings.apiBase
    }
}
