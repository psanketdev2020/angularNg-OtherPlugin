import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrollbar',
  templateUrl: './scrollbar.component.html',
  styleUrls: ['./scrollbar.component.css']
})
export class ScrollbarComponent implements OnInit {

  numbers = [];


  tables = [
    {name: 'sanket', age: 25},
    {name: 'pooja', age: 25},
    {name: 'rakesh', age: 25},
    {name: 'rahul', age: 25},
    {name: 'tushar', age: 25},
  ]
  constructor() { 
    for(let i=0; i<=500;i++){
      this.numbers.push(i);
    }
  }


  ngOnInit(): void {
  }

  // showData(e){
  //   console.log(e)
  // }

}
