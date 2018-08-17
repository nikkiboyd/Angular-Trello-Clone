import { Component } from '@angular/core';
import { Card } from './models/card.model';
import { List } from './models/list.model';
import { Board } from './models/board.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  allLists: List[] = [
    new List(
      'Today'),

      new List(
        'Tomorrow')
  ];

  selectedCard = null;

  editCard(clickedCard) {
    this.selectedCard = clickedCard;
  }

  finishedEditing() {
    this.selectedCard = null;
  }

  addCard(newCard: Card) {
    this.masterBoardList.push(newCard);
  }
}
