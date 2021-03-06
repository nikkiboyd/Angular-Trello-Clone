import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { ListsComponent } from './lists/lists.component';
import { DescriptionComponent } from './description/description.component';


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    ListsComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
