import { Component, Input } from '@angular/core';
import { TaskCard } from './task-card/task-card';
import { NewTask } from './new-task/new-task';

@Component({
  selector: 'app-tasks',
  imports: [TaskCard, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({required: true}) id!: string;
  @Input({required: true}) name!: string;

  isAddingTask = false;

  tasks = [
    { id: 't1', userId: 'u1', title: 'Master Angular', summary: 'Learn the fundamentals of Angular', dueDate: '02-10-2023' },
    { id: 't2', userId: 'u1', title: 'Build a portfolio site', summary: 'Deploy a personal site using Angular and Tailwind', dueDate: '12-03-2023' },
    { id: 't3', userId: 'u2', title: 'Design system audit', summary: 'Review UI components for consistency across the app', dueDate: '14-07-2025' },
    { id: 't4', userId: 'u2', title: 'Write unit tests', summary: 'Increase test coverage for the user module', dueDate: '20-08-2025' },
    { id: 't5', userId: 'u3', title: 'Refactor auth service', summary: 'Simplify token handling and add refresh logic', dueDate: '05-09-2025' },
    { id: 't6', userId: 'u3', title: 'Fix mobile layout bugs', summary: 'Resolve spacing issues on smaller viewports', dueDate: '18-09-2025' },
    { id: 't7', userId: 'u4', title: 'Set up CI pipeline', summary: 'Automate build and test steps on every push', dueDate: '01-10-2025' },
    { id: 't8', userId: 'u4', title: 'Migrate to standalone components', summary: 'Remove NgModules across the codebase', dueDate: '22-10-2025' },
    { id: 't9', userId: 'u5', title: 'Optimize bundle size', summary: 'Lazy load routes and trim unused dependencies', dueDate: '03-11-2025' },
    { id: 't10', userId: 'u5', title: 'Accessibility review', summary: 'Ensure all forms are keyboard and screen-reader friendly', dueDate: '15-11-2025' },
    { id: 't11', userId: 'u6', title: 'API documentation', summary: 'Document all REST endpoints with example payloads', dueDate: '28-11-2025' },
    { id: 't12', userId: 'u6', title: 'Dark mode support', summary: 'Add a theme toggle using CSS custom properties', dueDate: '10-12-2025' },

  ];

  get selectedUserTasks(){
    return this.tasks.filter(t => t.userId === this.id);
  }

  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter(t => t.id !== taskId);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCancelAddTask(){
    this.isAddingTask = false;
  }

}
