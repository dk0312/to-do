import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  tasks: string[] = [];
  task: string = '';

  constructor() { }

  addTask(){
    if(this.task.trim()){
      this.tasks.push(this.task);
      this.task = '';
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index,1);
  }
}
