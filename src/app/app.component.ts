import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'helpful-chooser';
  input: string = '';
  items: string[] = [];
  result: string = '';

  onSubmit() {
    this.items.push(this.input);
    this.input = '';
  }

  remove(item: string) {
    this.items = this.items.filter(x => x !== item);
  }

  choose() {
    const options = this.items;
    this.items = [];
    const r = Math.floor(Math.random() * options.length);
    this.result = options[r];
  }

  startOver() {
    this.items = [];
    this.result = '';
  }
}
