import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from 'src/app/models/Teacher';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-modify-teacher',
  templateUrl: './modify-teacher.component.html',
  styleUrls: ['./modify-teacher.component.css']
})
export class ModifyTeacherComponent implements OnInit {

  idTeacher!: number;
  teacher!: Teacher;
  error = false;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private teacherService: TeacherService) { }

  ngOnInit() {
    this.teacher = new Teacher();

    this.idTeacher = this.route.snapshot.params['idTeacher'];

    this.teacherService.getTeacherById(this.idTeacher).subscribe(data => {
        console.log(data)
        this.teacher = data;
      }, error => console.log(error));
  }

  updateTeacher() {
    console.log(this.teacher.nameTeacher);
    if (this.teacher.nameTeacher == "") {
      console.log("false")
      this.error = true;
      this.gotoTeachers();
    } else {
      this.teacherService.updateTeacher(this.teacher.idTeacher, this.teacher). subscribe(data => {
        console.log(data);
        this.teacher = new Teacher();
        this.submitted=true;
        this.gotoTeachers();
      }, error => console.log(error))
    }
  }
  gotoTeachers() {
    if (this.submitted == true) {
      setTimeout(() => {  window.location.reload(); }, 2000);
    } else {
      console.log("aqui estoy")
      setTimeout(() => {  window.location.reload(); }, 2000);
    }
  }

  onSubmit() {
    this.updateTeacher();
  }

  return() {
    this.router.navigate(['/teachers']);
  }

}
