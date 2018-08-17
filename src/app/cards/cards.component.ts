import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() childCurrentProjects: Card[];
  @Output() clickSender = new EventEmitter();

  newCard(cardToCreate: Card) {
    this.clickSender.emit(cardToCreate);
  }
}
