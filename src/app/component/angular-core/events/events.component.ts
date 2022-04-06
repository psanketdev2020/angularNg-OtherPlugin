import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  name: string = '';
  counter: number = 0;
  username = '';

  constructor() { }

  ngOnInit(): void {
  }

  showAlert() {
    alert('This is click event');
  }

  addUsername(event) {
    this.name = event.target.value;
  }

  incCounter() {
    this.counter++;
  }

  decCounter() {
    if (this.counter === 0) {
      alert('Minimum number is 0');
    } else {
      this.counter--;
    }
  }

  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll(e: Event) {
  //   let body = document.querySelector('body');
  //   // console.log(body);
  //   if(scrollY > 0) {
  //     body.classList.add('darkMode'); 
  //     // dont used camelcase css name
  //   }else {
  //     body.classList.remove('darkMode'); 
  //   }
  // }

  fillBgColor(e, element) {
    // console.log(e, element)
    element.classList.add('myStyle');
  }

  removeBgColor(e, element){
    element.classList.remove('myStyle');
  }
}
