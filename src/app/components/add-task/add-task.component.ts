import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  text: string = '';
  day: string = '';
  reminder: boolean = false;

  @Output() addTaskEvent: EventEmitter<Task> = new EventEmitter();

  constructor() {}

  onSubmit() {
    if (!this.text) {
      alert('Please Add Task!');
      return;
    }

    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.addTaskEvent.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
