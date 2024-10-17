import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './Tasks';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './taskitem.component.html',
  styleUrl: './taskitem.component.css'
})
export class TasksComponent {
@Input({required: true}) task!: Task;
@Output() complete = new EventEmitter<string>();
isComplete: boolean = false;
buttonText:string = 'Complete';
completeTask(){
  this.isComplete = true;
  this.buttonText = 'Completed'; 
  
  }
}
