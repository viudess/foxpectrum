import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { IMoodTracker } from "../../../back/foxpectrum/src/models/moodTracker/IMoodTracker";

@Injectable({
  providedIn: 'root'
})
export class MoodService {

  private url = environment.api

  constructor(private httpClient: HttpClient){

  }
  obterMood(){
    return this.httpClient.get<IMoodTracker[]>(this.url + '/')
  }
}
