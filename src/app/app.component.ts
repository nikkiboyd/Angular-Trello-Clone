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
    new List('Current Projects', [new Card('Trello Clone'), new Card('Recipe Management App'), new Card('Brainstorm Group Project Ideas')]),
    new List('Completed Projects', [new Card('DocGawk API'), new Card('ICE Raid Tracker'), new Card('Island Pie Pizza Website'), new Card('Keg Inventory System')]),
    new List('Project Ideas', [new Card('Professional Portfolio'), new Card('Personal Blog/Website'), new Card('Grocery Budgeting Tool')]),
  ];

  selectedList = null;

  newList(clickedNewList) {
    this.selectedList = clickedNewList;
  }

  saveList() {
    this.selectedList = null;
  }

  addList(newList: List) {
    this.allLists.push(newList);
  }
}
