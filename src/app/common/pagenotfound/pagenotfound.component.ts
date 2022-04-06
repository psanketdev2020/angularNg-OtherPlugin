import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  template: `
          <div class="page-not-found d-flex justify-content-center align-items-center text-center">
            <div class="container">
              <figure>
                  <img src="../../../assets/images/not-found.svg" alt="Page Not Found" class="mx-auto img-fluid" width="500" height="500">
              </figure>
                <h3 class="text-dark">Opps, Page Not Found</h3>
            </div>
        </div>`,
  styles: [
    `.page-not-found  {height: 97vh}`
  ],
})
export class PagenotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
