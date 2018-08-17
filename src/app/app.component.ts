import { Component } from '@angular/core';
import { Card } from './models/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  masterList: Card[] = [

  ];

  selectedCard = null;

  editCard(clickedCard) {
    this.selectedCard = clickedCard;
  }

  finishedEditing() {
    this.selectedCard = null;
  }

  addCard(newCard: Card) {
    this.masterList.push(newCard);
  }
}
