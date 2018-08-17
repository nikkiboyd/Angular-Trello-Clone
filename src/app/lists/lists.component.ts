import { Component, Input, Output, EventEmitter } from '@angular/core';
import { List } from '../models/list.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent {
  @Input() child: List[];
  @Output() clickSender = new EventEmitter();

  newList(listToCreate: List) {
    this.clickSender.emit(listToCreate);
  }
}
