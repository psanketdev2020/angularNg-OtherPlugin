import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-owlcarousel',
  templateUrl: './owlcarousel.component.html',
  styleUrls: ['./owlcarousel.component.css']
})
export class OwlcarouselComponent {
  constructor() { }

  customOptions: OwlOptions = {
    center: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    dots: true,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:2000,
    margin: 0,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  }


}
