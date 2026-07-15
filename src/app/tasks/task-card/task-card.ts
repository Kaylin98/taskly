import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-card',
  imports: [Card, DatePipe],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
  @Input({required: true}) task!: Task;

  constructor(private tasksService: TasksService){}

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }

}
