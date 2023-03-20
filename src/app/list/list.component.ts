import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() items: string[] = [];
  @Output() removeItemEvent = new EventEmitter<string>();
  
  removeItem(item: string) {
    this.removeItemEvent.emit(item);
  }
}
