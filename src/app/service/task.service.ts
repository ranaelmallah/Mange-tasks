import { Injectable } from '@angular/core';
import { Data } from '../task/taskitem/Tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks=[
    {
      id:'t1',
      title:'Angular',
      summary:'learn all basics for angular',
      dueDate:'2024-8-30',
      userId:'u1'
    },
    {
      id:'t2',
      title:'Javascript',
      summary:'learn all basics for angular',
      dueDate:'2025-8-30',
      userId:'u3'
    },
    {
      id:'t3',
      title:'TypeScript',
      summary:'learn all basics for angular',
      dueDate:'2024-8-30',
      userId:'u3'
    },
    
    {
      id:'t4',
      title:'HTML',
      summary:'learn  HtML',
      dueDate:'2024-10-30',
      userId:'u6'
    },
    {
      id:'t5',
      title:'Css',
      summary:'learn css',
      dueDate:'2024-11-1',
      userId:'u3'
    },
  ]

  getAllUserTasks(userId:string){
    return this.tasks.filter(task=>task.userId===userId);
  }
  removeTasks(id:string){
    this.tasks= this.tasks.filter(task=> task.id!==id);
  }
  addNewTask(data:Data, userId:string){
    this.tasks.push({
      id: 't' + (this.tasks.length + 1),
      title: data.title,
      summary: data.summary,
      dueDate: data.date,
      userId: userId
    })
  }
  
  constructor() { }
}
