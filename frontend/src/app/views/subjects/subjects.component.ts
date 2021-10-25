import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'src/app/models/Subject';
import { SubjectService } from 'src/app/services/subject.service';


@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  public subjects: Array<Subject> = [];
  public mySubject!: Subject;

  constructor(private subjectService: SubjectService, private router: Router, route: ActivatedRoute) {

    route.params.subscribe((x) => {
      this.loadInfo()
    })

  }

  ngOnInit(): void {
  }

  loadInfo() {
    this.subjectService.getSubjects().subscribe((b: Array<Subject>) => {
      this.subjects = b;
    })

    this.subjectService.getSubjectById(1).subscribe((b: Subject) => {
      this.mySubject = b;

      console.log(b.nameSubject)
    });
  }

  addAnotherSubject() {
    this.router.navigateByUrl("/addsubject");
  }

  modifySubject(idSubject: number) {
    this.router.navigateByUrl(`/modifysubject/${idSubject}`)
  }

  deleteSubject(idSubject: number) {
    this.subjectService.deleteSubject(idSubject).subscribe(() => {
      this.loadInfo();
    });
  }

}
