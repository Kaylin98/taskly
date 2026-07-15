import { Component, EventEmitter, Input, Output} from '@angular/core';
import { User } from './user.model';
import { Card } from "../shared/card/card";

@Component({
  selector: 'app-user-card',
  imports: [Card],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
  @Input({required: true}) user!: User;
  @Input({required: true}) isSelected!: boolean;
  @Output() select =  new EventEmitter<string>();

  get imagePath() {
      return `images/users/${this.user.avatar}`;
  }
  onSelectUser(){
    this.select.emit(this.user.id);
  }

}