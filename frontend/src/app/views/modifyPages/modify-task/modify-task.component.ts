import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-modify-task',
  templateUrl: './modify-task.component.html',
  styleUrls: ['./modify-task.component.css']
})
export class ModifyTaskComponent implements OnInit {

  idTask!: number;
  task!: Task;
  error = false;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private taskService: TaskService) { }

  ngOnInit() {
    this.task = new Task();

    this.idTask = this.route.snapshot.params['idTask'];

    this.taskService.getTaskById(this.idTask).subscribe(data => {
        console.log(data)
        this.task = data;
      }, error => console.log(error));
  }

  updateTask() {
    console.log(this.task.nameTask);
    console.log(this.task.subject.idSubjectMain);
    console.log(this.task.dateTask);
    console.log(this.task.descriptionTask);
    if (this.task.nameTask == "" || this.task.subject.idSubjectMain == null
    || this.task.dateTask == "" || this.task.descriptionTask == "") {
      console.log("false")
      this.error = true;
      this.gotoTasks();
    } else {
      this.taskService.updateTask(this.task.subject.idSubjectMain, this.task). subscribe(data => {
        console.log(data);
        this.task = new Task();
        this.submitted=true;
        this.gotoTasks();
      }, error => console.log(error))
    }
  }
  gotoTasks() {
    if (this.submitted == true) {
      setTimeout(() => {  window.location.reload(); }, 2000);
    } else {
      console.log("aqui estoy")
      setTimeout(() => {  window.location.reload(); }, 2000);
    }
  }

  onSubmit() {
    this.updateTask();
  }

  return() {
    this.router.navigate(['/']);
  }

}
