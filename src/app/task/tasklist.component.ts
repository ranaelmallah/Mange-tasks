import { Component, inject, Input } from '@angular/core';
import { TasksComponent } from "./taskitem/taskitem.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { Data } from './taskitem/Tasks';
import { TaskService } from '../service/task.service';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from "../pipe/search.pipe";


@Component({
    selector: 'app-task-list',
    standalone: true,
    templateUrl: './tasklist.component.html',
    styleUrl: './tasklist.component.css',
    imports: [TasksComponent, NewTaskComponent, FormsModule, SearchPipe]
})
export class TaskComponent {

  text: string = '';

  private _taskServices= inject(TaskService);

  @Input({required:true}) name!:string;
  @Input({required:true}) userId!:string;
  selectedUserId= "u1";
  addTaskValue:boolean =false;
  update: boolean = false;
  showdialog: boolean = false;

  get selectedUser(){
    return this._taskServices.getAllUserTasks(this.userId);
  }

  completeTask(id:string){
    this._taskServices.removeTasks(id);
  }

  addTask() {
    this.addTaskValue = true;

  }
  closeTask(){
    this.addTaskValue=false
  }



}


