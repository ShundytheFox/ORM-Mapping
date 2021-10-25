import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../models/Teacher';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const httpOptionsUsingUrlEncoded = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  endpoint: string = "http://localhost:8080/teachers"

  constructor(private httpClient: HttpClient) { }

  getTeachers(): Observable<Teacher[]>{
    return this.httpClient.get<Teacher[]>(this.endpoint);
  }

  getTeacherById(idTeacher: number): Observable<Teacher>{
    return this.httpClient.get<Teacher>(this.endpoint + "/" + idTeacher);
  }

  createTeacher(teachers: Teacher): Observable<Teacher>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("nameTeacher", teachers.nameTeacher);
    const body = bodyEncoded.toString();

    console.log("createTeacher")
    console.log(JSON.stringify(teachers))
    const endpointPost = this.endpoint
    return this.httpClient.post<Teacher>(endpointPost, body, httpOptionsUsingUrlEncoded);
  }

  updateTeacher(idTeacher: number, teachers: Teacher): Observable<Teacher> {
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("idTeacher", teachers.idTeacher.toString());
    bodyEncoded.append("nameTeacher", teachers.nameTeacher);
    const body = bodyEncoded.toString();
    const endpointPut = this.endpoint + "/" + idTeacher
    
    return this.httpClient.put<Teacher>(endpointPut, body, httpOptionsUsingUrlEncoded);
  }

  createTeacherUsingJSON(teacher: Teacher): Observable<Teacher>{
    return this.httpClient.post<Teacher>(this.endpoint, JSON.stringify(teacher), httpOptions);
  }

  deleteTeacher(idTeacher: number): Observable<Teacher>{
    return this.httpClient.delete<Teacher>(this.endpoint + "/" + idTeacher);
  }
}
