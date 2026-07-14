import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
  @Input({required: true}) task!: Task;
  @Output() complete = new EventEmitter<string>();


  onCompleteTask() {
    this.complete.emit(this.task.id);
  }

}
