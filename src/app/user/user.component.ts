import { Component ,Input,Signal, computed, signal,input, Output, EventEmitter} from '@angular/core';
import { User } from './User';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  //receive data from outside
  @Input({required: true}) user!: User;
  // @Input({required:true}) avatar!: string;
  // @Input({required:true}) name!: string;
  // @Input({required:true}) id!: string;
  @Output() select = new EventEmitter<string>();
//input function =>signals :
// avatar=input.required<string>();
// name=input.required<string>()
// imagePath=computed(()=>'assets/users/'+this.avatar())

  get imagePath(){
    return 'assets/users/'+this.user.avatar
  }
  onSelectUser(){
    this.select.emit(this.user.id);
  }
}




