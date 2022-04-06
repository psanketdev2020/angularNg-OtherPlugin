import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/common/services/http.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
})
export class SubjectComponent implements OnInit {
  constructor(private _httpservice: HttpService) {
    this._httpservice.uName.subscribe((name) => {
      this.userName = name;
    });
  }

  ngOnInit(): void {}

  userName: string = 'Hello World';
}
