import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  taskUrl:string = 'https://testapi.io/api/akirayoglu/0/tasks/getTasks';

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.taskUrl}`);

  }
}
