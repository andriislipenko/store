import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../entities/item';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
    @Input() item: Item;

    constructor() {}

    ngOnInit(): void {}
}
