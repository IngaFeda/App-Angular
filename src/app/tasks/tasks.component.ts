import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from './task/task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {

  @Input({required: true}) name!:string;
  @Input({required: true}) userId!:string;
  isAddingTask = false;
  // private tasksService: TaskService;
  // constructor(tasksService: TaskService) {
  //     this.tasksService = tasksService;
  // }

  constructor(private tasksService: TaskService) {}

  get selectedUserTasks() {
    return this.tasksService.getUsersTasks(this.userId);
  }

  // onCompleteTask(id: string) {
   
  // }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  // onAddTask(taskData: NewTaskData){
  //   // insert at the begging
  //   this.isAddingTask = false
  // }
}

// this.tasks.push({
//   id: new Date().getTime().toString(),
//   userId: this.userId,
//   title: taskData.title,
//   summary: taskData.summary,
//   dueDate: taskData.date
// }) insert at the end of array