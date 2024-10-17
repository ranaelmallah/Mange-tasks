import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Data } from '../taskitem/Tasks';
import { DatePipe } from '@angular/common';
import { TaskService } from '../../service/task.service';



@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule,DatePipe],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  constructor(private _taskServices:TaskService) { }
  enterTitle= "";
  enterSummary= "";
  enterDate= "";

  @Output() cancel= new EventEmitter<void>();

  @Input({required:true}) selectedUserId!:string;
  closeTask(){
    this.cancel.emit();
  }

  submitTask() {
    this._taskServices.addNewTask({
      title: this.enterTitle,
      summary: this.enterSummary,
      date: this.enterDate
    }, this.selectedUserId
  )
  }
}
