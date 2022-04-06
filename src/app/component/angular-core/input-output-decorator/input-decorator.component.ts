import { Component } from '@angular/core';

@Component({
  selector: 'app-input-decorator',
  templateUrl: './input-decorator.component.html',
  styleUrls: ['./input-decorator.component.css']
})
export class InputDecoratorComponent {

  constructor() { }

  counter = 0;
  showNav = false;

  increment() {
    this.counter++;
  }

  decrment() {
    this.counter--;
  }

  displayNav() {
    this.showNav = true;
  }

  countChangedHandler(count: number) {
    this.counter = count;
  }

  hideNav(value: boolean) {
    this.showNav = value;
  }

}
