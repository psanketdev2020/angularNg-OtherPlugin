import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  proSelect: string;
  selectProduct: boolean;
  addToCard: boolean = false;

  selectPro(data) {
    this.selectProduct = true;
    this.proSelect = data;
  }

  addedInCart(val) {
    this.addToCard = val;
  }

}
