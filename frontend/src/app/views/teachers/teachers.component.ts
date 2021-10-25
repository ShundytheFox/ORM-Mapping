import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from 'src/app/models/Teacher';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  public teachers: Array<Teacher> = [];
  public myTeacher!: Teacher;

  constructor(private teacherService: TeacherService, private router: Router, route: ActivatedRoute) {

    route.params.subscribe((x) => {
      this.loadInfo()
    })

  }

  ngOnInit(): void {
  }

  loadInfo() {
    this.teacherService.getTeachers().subscribe((b: Array<Teacher>) => {
      this.teachers = b;
    })

    this.teacherService.getTeacherById(1).subscribe((b: Teacher) => {
      this.myTeacher = b;

      console.log(b.nameTeacher)
    });
  }

  addAnotherTeacher() {
    this.router.navigateByUrl("/addteacher");
  }

  modifyTeacher(idTeacher: number) {
    this.router.navigateByUrl(`/modifyteacher/${idTeacher}`)
  }

  deleteTeacher(idTeacher: number) {
    this.teacherService.deleteTeacher(idTeacher).subscribe(() => {
      this.loadInfo();
    });
  }

}
