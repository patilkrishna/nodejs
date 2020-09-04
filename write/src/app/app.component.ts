import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public title = 'hello ';
 public counter = 0;
 
 public list = [];
 public arr = [];


 public newTask;


 public AddTask() {

  this.list.push(this.newTask);
  this.newTask = '';

 }
 
 

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }



 public addPoems() {
   this.list.push(1);
 }

  public deleteTask(index) {
    this.list.splice(index, 1);
  }
}
