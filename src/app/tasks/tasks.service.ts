import { Injectable } from "@angular/core";
import { NewTaskData } from "./task.model";

@Injectable({providedIn: 'root'})
export class TasksService{
    private tasks = [
        { id: 't1', userId: 'u1', title: 'Master Angular', summary: 'Learn the fundamentals of Angular', dueDate: '02-10-2023' },
        { id: 't2', userId: 'u1', title: 'Build a portfolio site', summary: 'Deploy a personal site using Angular and Tailwind', dueDate: '2-03-2023' },
        { id: 't3', userId: 'u2', title: 'Design system audit', summary: 'Review UI components for consistency across the app', dueDate: '1-07-2025' },
        { id: 't4', userId: 'u2', title: 'Write unit tests', summary: 'Increase test coverage for the user module', dueDate: '01-08-2025' },
        { id: 't5', userId: 'u3', title: 'Refactor auth service', summary: 'Simplify token handling and add refresh logic', dueDate: '05-09-2025' },
        { id: 't6', userId: 'u3', title: 'Fix mobile layout bugs', summary: 'Resolve spacing issues on smaller viewports', dueDate: '8-09-2025' },
        { id: 't7', userId: 'u4', title: 'Set up CI pipeline', summary: 'Automate build and test steps on every push', dueDate: '01-10-2025' },
        { id: 't8', userId: 'u4', title: 'Migrate to standalone components', summary: 'Remove NgModules across the codebase', dueDate: '2-10-2025' },
        { id: 't9', userId: 'u5', title: 'Optimize bundle size', summary: 'Lazy load routes and trim unused dependencies', dueDate: '03-11-2025' },
        { id: 't10', userId: 'u5', title: 'Accessibility review', summary: 'Ensure all forms are keyboard and screen-reader friendly', dueDate: '1-11-2025' },
        { id: 't11', userId: 'u6', title: 'API documentation', summary: 'Document all REST endpoints with example payloads', dueDate: '8-11-2025' },
        { id: 't12', userId: 'u6', title: 'Dark mode support', summary: 'Add a theme toggle using CSS custom properties', dueDate: '10-12-2025' },
    ];

    constructor(){
        const tasks = localStorage.getItem('tasks');

        if(tasks){
            this.tasks = JSON.parse(tasks);
        }
    }


    getUserTasks(userId: string) {
        return this.tasks.filter(t => t.userId === userId);
    }

    addTask(task: NewTaskData, userId: string) {
        this.tasks.unshift( {
            id: new Date().getTime().toString(),
            userId: userId,
            title: task.title,
            summary: task.summary,
            dueDate: task.dueDate
        });
        this.saveTasks();
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter(t => t.id !== id);

        this.saveTasks();
    }


    private saveTasks(){
        localStorage.setItem('tasks',JSON.stringify(this.tasks));
    }

}