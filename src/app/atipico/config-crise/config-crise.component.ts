import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-config-crise',
  templateUrl: './config-crise.component.html',
  styleUrl: './config-crise.component.css'
})
export class ConfigCriseComponent implements OnInit{

  constructor(private api: TodoService) {}

  public dados: any = [];


  ngOnInit(): void {
    this.dados = this.getAll();
  }



  async getAll() {
    return await this.api.getAll();
  }
}
