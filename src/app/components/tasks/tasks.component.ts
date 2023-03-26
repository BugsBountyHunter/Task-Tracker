import { Component, OnInit } from '@angular/core';
import { Task } from '../../task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  onDeleteItem(task: Task) {
    this.taskService.deleteTask(task).subscribe((deletedTask) => {
      // item already deleted from backend and update ui
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    });
  }

  onToggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe((updatedTask) => {
      console.log('Updated Task', updatedTask);
    });
  }

  onAddTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => {
      this.tasks.push(task);
      console.log('Create Task', task);
    });
  }
}
