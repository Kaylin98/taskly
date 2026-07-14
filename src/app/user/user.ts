import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({required: true}) Id!: string;
  @Input({required: true}) name!: string;
  @Input({required: true}) avatar!: string;

  @Output() select =  new EventEmitter<string>();

  get imagePath() {
      return `/images/users/${this.avatar}`;
  }
  onSelectUser(){
    this.select.emit(this.Id);
  }

}