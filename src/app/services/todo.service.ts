import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { IMoodTracker } from "../../../back/foxpectrum/src/models/moodTracker/IMoodTracker";
import { ITodo } from "../../../back/foxpectrum/src/models/todo/ITodo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private url = environment.api

  constructor(private httpClient: HttpClient){

  }
  obterTodo(){
    return this.httpClient.get<ITodo[]>(this.url + '/')
  }
}
