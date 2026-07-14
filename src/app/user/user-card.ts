import { Component, EventEmitter, Input, Output} from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
  @Input({required: true}) user!: User;
  @Input({required: true}) isSelected!: boolean;
  @Output() select =  new EventEmitter<string>();

  get imagePath() {
      return `/images/users/${this.user.avatar}`;
  }
  onSelectUser(){
    this.select.emit(this.user.id);
  }

}