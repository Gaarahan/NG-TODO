import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {Todo, TODO_STATUS} from './todo.component.model'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less']
})
export class TodoComponent implements OnInit {
  @ViewChild('todoInput') todoInputEle: TemplateRef<any>

  TODO_STATUS = TODO_STATUS
  todoList: Array<Todo>
  constructor() { 
    this.todoList = [];
  }

  ngOnInit(): void { }

  addTodo() {
    const todoText = this.todoInputEle.nativeElement.value.trim();
    if (todoText) {
      this.todoList.push({
        label: todoText,
        status: TODO_STATUS.ACTIVE
      })
      this.todoInputEle.nativeElement.value = '';
    }
  }

  onKeyUp(event) {
    if (event.key === "Enter") {
      this.addTodo();
    }
  }

  onStatusChange(index) {
    const status = this.todoList[index].status;
    this.todoList[index].status = 
      status === TODO_STATUS.ACTIVE ? TODO_STATUS.DONE : TODO_STATUS.ACTIVE;
  }
}
