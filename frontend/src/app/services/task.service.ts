import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/Task';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const httpOptionsUsingUrlEncoded = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  endpoint: string = "http://localhost:8080/tasks"

  constructor(private httpClient: HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.httpClient.get<Task[]>(this.endpoint);
  }

  getTaskById(idTask: number): Observable<Task>{
    return this.httpClient.get<Task>(this.endpoint + "/" + idTask);
  }

  createTask(tasks: Task): Observable<Task>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("idSubject", tasks.idSubject.toString());
    bodyEncoded.append("nameTask", tasks.nameTask);
    bodyEncoded.append("dateTask", tasks.dateTask);
    bodyEncoded.append("descriptionTask", tasks.descriptionTask);
    const body = bodyEncoded.toString();

    console.log("createTask")
    console.log(JSON.stringify(tasks))
    const endpointPost = this.endpoint + "/" + tasks.idSubject
    return this.httpClient.post<Task>(endpointPost, body, httpOptionsUsingUrlEncoded);
  }

  updateTask(idSubject: number, tasks: Task): Observable<Task> {
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("idTask", tasks.idTask.toString());
    bodyEncoded.append("nameTask", tasks.nameTask);
    bodyEncoded.append("dateTask", tasks.dateTask);
    bodyEncoded.append("descriptionTask", tasks.descriptionTask);
    const body = bodyEncoded.toString();
    const endpointPut = this.endpoint + "/" + idSubject
    
    return this.httpClient.put<Task>(endpointPut, body, httpOptionsUsingUrlEncoded);
  }

  createTaskUsingJSON(task: Task): Observable<Task>{
    return this.httpClient.post<Task>(this.endpoint, JSON.stringify(task), httpOptions);
  }

  deleteTask(idTask: number): Observable<Task>{
    return this.httpClient.delete<Task>(this.endpoint + "/" + idTask);
  }
}
