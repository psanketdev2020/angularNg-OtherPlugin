import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() show: boolean;
  @Output() hide : EventEmitter<boolean> = new EventEmitter();

  hideNav(){
    this.show = false;
    this.hide.emit(this.show);
  }

}
