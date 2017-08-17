import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'new-task',
  templateUrl: 'app/new-task.component.html'
})

export class NewTaskComponent {
  @Output() newTaskSender = new EventEmitter();

  submitForm(description: string, priority: number) {
    var newTaskToAdd: Task = new Task(description, priority);
    this.newTaskSender.emit(newTaskToAdd);
  }
}
