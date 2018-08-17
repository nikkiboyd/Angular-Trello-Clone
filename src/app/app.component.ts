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
  currentProjects: string[] = ['Trello Clone | AngularJS Code Review', 'Recipe Management App | Independent Project'];

  allLists: List[] = [
    new List(
      'Current Projects',
    ['Trello Clone | AngularJS Code Review', 'Recipe Management App | Independent Project']),

    new List(
      'Completed Projects',
    ['DocGawk | BetterDoctor API Code Review', 'ICE Tracker | C# Group Project'])
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
