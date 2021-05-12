import { Component, OnInit } from '@angular/core';
import { Item } from '../entities/item';
import { ItemsService } from '../items.service';

@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
    public items: Item[] = [];

    constructor(
        private itemsService: ItemsService
    ) {}

    ngOnInit(): void {
        this.getItems();
    }

    public getItems(): void {
        this.itemsService.getItems().subscribe((items: Item[]) => {
            this.items = items;
        })
    }
}
