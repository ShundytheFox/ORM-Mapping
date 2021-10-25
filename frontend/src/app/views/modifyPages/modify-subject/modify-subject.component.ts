import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'src/app/models/Subject';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-modify-subject',
  templateUrl: './modify-subject.component.html',
  styleUrls: ['./modify-subject.component.css']
})
export class ModifySubjectComponent implements OnInit {

  idSubject!: number;
  subject!: Subject;
  error = false;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private subjectService: SubjectService) { }

  ngOnInit() {
    this.subject = new Subject();

    this.idSubject = this.route.snapshot.params['idSubject'];

    this.subjectService.getSubjectById(this.idSubject).subscribe(data => {
        console.log(data)
        this.subject = data;
      }, error => console.log(error));
  }

  updateSubject() {
    console.log(this.subject.nameSubject);
    if (this.subject.nameSubject == "") {
      console.log("false")
      this.error = true;
      this.gotoSubjects();
    } else {
      this.subjectService.updateSubject(this.subject.idSubjectMain, this.subject). subscribe(data => {
        console.log(data);
        this.subject = new Subject();
        this.submitted=true;
        this.gotoSubjects();
      }, error => console.log(error))
    }
  }
  gotoSubjects() {
    if (this.submitted == true) {
      setTimeout(() => {  window.location.reload(); }, 2000);
    } else {
      console.log("aqui estoy")
      setTimeout(() => {  window.location.reload(); }, 2000);
    }
  }

  onSubmit() {
    this.updateSubject();
  }

  return() {
    this.router.navigate(['/subjects']);
  }

}
