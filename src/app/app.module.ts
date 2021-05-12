import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ItemsModule } from './items/items.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        ItemsModule,
        BrowserModule,
        CoreModule
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
