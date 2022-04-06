import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercise-child',
  templateUrl: './exercise-child.component.html',
  styleUrls: ['./exercise-child.component.css'],
})
export class ExerciseChildComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() boxColor;
  @Input() palceholderText;
  @Output() inputValue = new EventEmitter();
  count: number = 0;

  addUser(inputval) {
    if (inputval.value.length > 0) {
      this.count = this.count + 1;
      this.inputValue.emit(inputval.value);
      inputval = '';
    } else {
      alert('Kindly fill the input');
    }
  }
}
