import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/common/services/http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
})
export class HttpComponent implements OnInit {
  public dataList = [];
  constructor(private _httpservice: HttpService) {}

  ngOnInit(): void {
    this._httpservice
      .userList()
      .subscribe((userData) => (this.dataList = userData));
  }
}
