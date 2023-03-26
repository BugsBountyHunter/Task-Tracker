import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() onDeleteItemEvent: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminderEvent: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;
  constructor() {}

  onDeleteItem(task: Task) {
    this.onDeleteItemEvent.emit();
  }

  onToggleReminder(task: Task) {
    this.onToggleReminderEvent.emit();
  }
}
