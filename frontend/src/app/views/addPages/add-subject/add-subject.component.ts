import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'src/app/models/Subject';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  subject: Subject = new Subject();
  submitted = false;
  error = false;
  
  constructor(private subjectService: SubjectService, 
    private router: Router) { 
    }

  ngOnInit() {
  }

  save() {
    if (this.subject.nameSubject == "") {

        console.log("false")
        this.error = true;
        this.gotoSubjects();
        
      } else {

        this.subjectService
        .createSubject(this.subject).subscribe(data => {
          console.log(data)
          this.subject = new Subject();
          this.submitted = true;
          this.gotoSubjects();
        },
        errorMessage => console.log(errorMessage))
      }
  }

  onSubmit() {
    this.save();
  }

  gotoSubjects() {
    if (this.submitted == true) {
      setTimeout(() => {  window.location.reload(); }, 2000);
    } else {
      console.log("aqui estoy")
      setTimeout(() => {  window.location.reload(); }, 2000);
    }
  }

  return() {
    this.router.navigate(['/subjects']);
  }

}
