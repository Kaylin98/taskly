import { Component, EventEmitter, Input, Output} from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
  @Input({required: true}) user!: User;
  @Output() select =  new EventEmitter<string>();

  get imagePath() {
      return `/images/users/${this.user.avatar}`;
  }
  onSelectUser(){
    this.select.emit(this.user.id);
  }

}