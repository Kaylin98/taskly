import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
import { UserCard } from "./user/user-card";
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [Header, UserCard, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('taskly');

  users = DUMMY_USERS;
  selectedUserId = 'u1';

  get selectedUser() {
    return this.users.find(u => u.id === this.selectedUserId)!;
  }

  onUserSelected(Id: string) {
    this.selectedUserId = Id;
  }

}
