import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  listData: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  // Add list to dom
  addListData(data) {
    this.listData.push({
      todoList: data.value,
    })
    data.value = '';
  }

  // remove list from dom
  removeList(index) {
    this.listData.splice(index, 1);
  }

}
