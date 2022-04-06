import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  template: `
     <div class="container pb-4">
        <h1>Hello, I am inline style</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, laudantium?</p>
        <button class="btn btn-sm btn-outline-primary px-4" (click)="showAlert($event)">Ohhh</button>
     </div>
      `,
  styles: [
    `
      h1{color:red;font-size: 20px; font-weight: 200;}
      p{color: #303030; }
    `
  ]
})
export class StyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showAlert(e){
    alert(`${e.target.innerText} is a line html button`);
  }

}
