import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task: Task = new Task();
  submitted = false;
  error = false;
  
  constructor(private taskService: TaskService, 
    private router: Router) { 
    }

  ngOnInit() {
  }

  save() {
    if (this.task.nameTask == "" || this.task.idSubject == null
      || this.task.dateTask == "" || this.task.descriptionTask == "") {

        console.log("false")
        this.error = true;
        this.gotoTasks();
        
      } else {

        this.taskService
        .createTask(this.task).subscribe(data => {
          console.log(data)
          this.task = new Task();
          this.submitted = true;
          this.gotoTasks();
        },
        errorMessage => console.log(errorMessage))
      }
  }

  onSubmit() {
    this.save();
  }

  gotoTasks() {
    if (this.submitted == true) {
      setTimeout(() => {  window.location.reload(); }, 2000);
    } else {
      console.log("aqui estoy")
      setTimeout(() => {  window.location.reload(); }, 2000);
    }
  }

  return() {
    this.router.navigate(['/']);
  }

}
