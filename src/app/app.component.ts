import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from "./task/tasklist.component";
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, UserComponent, TaskComponent, FormsModule]
})
export class AppComponent {
  title = 'Input and Output'; 


  users=DUMMY_USERS
  selectedUserId!:string;

  get selectedUser(){
    return this.users.find((user)=>user.id === this.selectedUserId)!  // find user by id
  }
  onSelectedUserId(id:string){
    this.selectedUserId = id;
    console.log(this.selectedUserId)
  }

  
}
