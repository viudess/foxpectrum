import { Tarefa } from '../Tarefa';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiURL = environment.api + '/tasks';

  constructor(private http: HttpClient) { }

  getTasks() : Observable<Tarefa[]>{
    return this.http.get<Tarefa[]>(this.apiURL)
  }

  deleteTask(tarefa : Tarefa) : Observable<Tarefa>{
    return this.http.delete<Tarefa>(`${this.apiURL}/${tarefa.id}`)
  }

  updateTask(tarefa : Tarefa) : Observable<Tarefa>{
    return this.http.put<Tarefa>(`${this.apiURL}/${tarefa.id}`, tarefa)
  }

  AddTask(tarefa : Tarefa) : Observable<Tarefa>{
    return this.http.post<Tarefa>(`${this.apiURL}`, tarefa)
  }
}
