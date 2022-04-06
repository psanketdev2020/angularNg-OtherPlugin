import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider'

@Component({
  selector: 'app-ng5slider',
  templateUrl: './ng5slider.component.html',
  styleUrls: ['./ng5slider.component.css']
})
export class Ng5sliderComponent  {

  constructor() { }

  value:number = 100;

  options: Options = {
    floor: 0,
    ceil: 200
  }

}
