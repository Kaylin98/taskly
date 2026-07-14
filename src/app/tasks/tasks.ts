import { Component, Input } from '@angular/core';
import { TaskCard } from './task-card/task-card';

@Component({
  selector: 'app-tasks',
  imports: [TaskCard],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({required: true}) id!: string;
  @Input({required: true}) name!: string;


  tasks = [
    { id: 't1', userId: 'u1', title: 'Master Angular', summary: 'Learn the fundamentals of Angular', dueDate: '02-10-2023' },
    { id: 't2', userId: 'u1', title: 'Task 2', summary: 'Summary of Task 2', dueDate: '12-03-2023' },
    { id: 't3', userId: 'u2', title: 'Task 3', summary: 'Summary of Task 3', dueDate: '14-07-2025' },
  ];

  get selectedUserTasks(){
    return this.tasks.filter(t => t.userId === this.id);
  }

}
