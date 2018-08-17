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
  currentBoard: string = "My Board";
  allLists: List[] = [
    new List(
      'Current Projects'),

    new List(
      'Completed Projects')
  ];

  listOneCards: Card[] = [
    new Card(
      'Trello Clone | AngularJS Code Review'
    ),
    new Card(
      'Recipe Management App | Independent Project'
    )
  ]

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
