import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/models/Teacher';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  teacher: Teacher = new Teacher();
  submitted = false;
  error = false;
  
  constructor(private teacherService: TeacherService, 
    private router: Router) { 
    }

  ngOnInit() {
  }

  save() {
    if (this.teacher.nameTeacher == "") {

        console.log("false")
        this.error = true;
        this.gotoTeachers();
        
      } else {

        this.teacherService
        .createTeacher(this.teacher).subscribe(data => {
          console.log(data)
          this.teacher = new Teacher();
          this.submitted = true;
          this.gotoTeachers();
        },
        errorMessage => console.log(errorMessage))
      }
  }

  onSubmit() {
    this.save();
  }

  gotoTeachers() {
    if (this.submitted == true) {
      setTimeout(() => {  window.location.reload(); }, 2000);
    } else {
      console.log("aqui estoy")
      setTimeout(() => {  window.location.reload(); }, 2000);
    }
  }

  return() {
    this.router.navigate(['/teachers']);
  }

}
