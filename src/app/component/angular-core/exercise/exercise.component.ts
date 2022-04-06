import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css'],
})
export class ExerciseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public users: any[] = [];
  public admins: any[] = [];

  // user
  addUser(data: string) {
    this.users.push(data);
  }

  removeUser(index) {
    this.users.splice(index, 1);
  }

  // admin
  addAdmin(data) {
    this.admins.push(data);
  }

  removeAdmin(index) {
    this.admins.splice(index, 1);
  }
}
