import { Component, OnInit } from '@angular/core';
import { HelloMessage } from './entities/hello-message';
import { HomeService } from './home.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public helloMessage: string = '';

    constructor(
        private homeService: HomeService
    ) {}

    ngOnInit(): void {
        this.getHelloMessage();
    }

    private getHelloMessage(): void {
        this.homeService.getHelloMessage().subscribe((helloMessage: HelloMessage) => {
            this.helloMessage = helloMessage.message;
        })
    }
}
