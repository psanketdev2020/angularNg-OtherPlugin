import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/common/services/http.service';

@Component({
  selector: 'app-subject-child',
  templateUrl: './subject-child.component.html',
  styleUrls: ['./subject-child.component.css'],
})
export class SubjectChildComponent implements OnInit {
  constructor(private _httpservice: HttpService) {
    this._httpservice.uName.subscribe((name) => {
      this.userName = name;
    });
  }
  ngOnInit(): void {}

  // subject
  // userName: string = 'Hello World';

  // Behavior Subject
  userName;

  updateUserName(uname) {
    this._httpservice.uName.next(uname.value);
  }
}
