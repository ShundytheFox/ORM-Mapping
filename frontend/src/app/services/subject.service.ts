import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from '../models/Subject';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const httpOptionsUsingUrlEncoded = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  endpoint: string = "http://localhost:8080/subjects"

  constructor(private httpClient: HttpClient) { }

  getSubjects(): Observable<Subject[]>{
    return this.httpClient.get<Subject[]>(this.endpoint);
  }

  getSubjectById(idSubject: number): Observable<Subject>{
    return this.httpClient.get<Subject>(this.endpoint + "/" + idSubject);
  }

  createSubject(subjects: Subject): Observable<Subject>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("nameSubject", subjects.nameSubject);
    const body = bodyEncoded.toString();

    console.log("createSubject")
    console.log(JSON.stringify(subjects))
    const endpointPost = this.endpoint
    return this.httpClient.post<Subject>(endpointPost, body, httpOptionsUsingUrlEncoded);
  }

  updateSubject(idSubject: number, subjects: Subject): Observable<Subject> {
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("idSubjectMain", subjects.idSubjectMain.toString());
    bodyEncoded.append("nameSubject", subjects.nameSubject);
    const body = bodyEncoded.toString();
    const endpointPut = this.endpoint + "/" + idSubject
    
    return this.httpClient.put<Subject>(endpointPut, body, httpOptionsUsingUrlEncoded);
  }

  createSubjectUsingJSON(subject: Subject): Observable<Subject>{
    return this.httpClient.post<Subject>(this.endpoint, JSON.stringify(subject), httpOptions);
  }

  deleteSubject(idSubject: number): Observable<Subject>{
    return this.httpClient.delete<Subject>(this.endpoint + "/" + idSubject);
  }
}
