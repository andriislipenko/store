import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { CardComponent } from './card/card.component';
import { ItemsService } from './items.service';

@NgModule({
    declarations: [ItemsComponent, CardComponent],
    imports: [CommonModule],
    providers: [ItemsService]
})
export class ItemsModule {}
