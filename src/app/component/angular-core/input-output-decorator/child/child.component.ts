import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, SimpleChange  } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  constructor() { }

  @Input() count: number;
  @Output() countChanged: EventEmitter<number> = new EventEmitter();

  // to get the previois value & currnt valu & firstchange
  ngOnChanges(changes: SimpleChanges) {
    for (let property in changes) {
      if (property === 'count') {
        console.log('Previous: ', changes[property].previousValue);
        console.log('Current: ', changes[property].currentValue);
        console.log('Firstchange :', changes[property].firstChange);
      }
    }
  }

  increment() {
    this.count++;
    this.countChanged.emit(this.count);
  }

  decrment() {
    this.count--;
    this.countChanged.emit(this.count);
  }

  // Product Code
  @Input() productSelect: boolean = false;
  @Input() data: string;
  @Output() addToCartData: EventEmitter<boolean> = new EventEmitter();

  cardAdd() {
    this.addToCartData.emit(true);
  }

}
