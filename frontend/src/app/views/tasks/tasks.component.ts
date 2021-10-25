import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  public tasks: Array<Task> = [];
  public myTask!: Task;

  constructor(private taskService: TaskService, private router: Router, route: ActivatedRoute) {

    route.params.subscribe((x) => {
      this.loadInfo()
    })

  }

  ngOnInit(): void {
  }

  loadInfo() {
    this.taskService.getTasks().subscribe((b: Array<Task>) => {
      this.tasks = b;
    })

    this.taskService.getTaskById(1).subscribe((b: Task) => {
      this.myTask = b;

      console.log(b.subject.nameSubject)
    });
  }

  addAnotherTask() {
    this.router.navigateByUrl("/addtask");
  }

  modifyTask(idTask: number) {
    this.router.navigateByUrl(`/modifytask/${idTask}`)
  }

  deleteTask(idTask: number) {
    this.taskService.deleteTask(idTask).subscribe(() => {
      this.loadInfo();
    });
  }

  taskDetails(idTask: number){
    this.router.navigateByUrl(`/task-details/${idTask}`);
  }

}
