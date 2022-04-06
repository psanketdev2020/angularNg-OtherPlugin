import { KeyValue } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  date: Date = new Date();
  title: string = 'Hello World!';
  msg: string = 'Welcome To Angular';
  num: number = 9542.14554;
  per: number = .7414;
  cur: number = 175233999;
  fahrenheit : number | undefined;
  celsius : number | undefined;


  obj = { a: 10, b: 20, c: 30, d: 40, e: 50 }

  orderOriginal = (a:KeyValue<number, string>, b:KeyValue<number, string>) : number => {
    return 0;
  }

  orderOriginalAsc = (a:KeyValue<number, string>, b:KeyValue<number, string>) : number => {
    return a.value > b.value ? -1 : (a.value > b.value) ? 0 : 1;
  }
 
  orderOriginalDsc = (a:KeyValue<number, string>, b:KeyValue<number, string>) : number => {
    return a.value > b.value ? 1 : (a.value > b.value) ? 0 : -1;
  }

}
