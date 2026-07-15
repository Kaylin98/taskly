import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task.model';
import { Card } from "../../shared/card/card";

@Component({
  selector: 'app-task-card',
  imports: [Card],
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
