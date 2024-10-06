import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../dummy-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {

  tasks = dummyTasks;

  @Input({required: true}) name!:string;
  @Input({required: true}) idUser!:string;
  

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.idUser);
  }
}
