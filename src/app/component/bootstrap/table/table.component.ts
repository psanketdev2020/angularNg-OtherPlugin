import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  leftEnd: boolean = false;
  rightEnd: boolean = true;
  constructor() { }

  ngOnInit(): void {
    let itemsLength = document.querySelectorAll('.tbody tr');
    let itemSize;
    itemsLength.forEach((elem) => {
      itemSize = elem.clientWidth;;
    })
    let paddleMargin = 20;
    // get wrapper width
    let getMenuWrapperSize = function () {
      let tableWrapper = document.querySelector('.middle');
      let maintableWrapper = tableWrapper;
      return maintableWrapper
    }
  }

  // get items dimensions


  @ViewChild('widgetsContent') widgetsContent: ElementRef;
  scrollLeft() {
    this.widgetsContent.nativeElement.scrollLeft -= 150;
    console.log(this.widgetsContent.nativeElement)
  }

  scrollRight() {
    this.widgetsContent.nativeElement.scrollLeft += 150;
  }

}
