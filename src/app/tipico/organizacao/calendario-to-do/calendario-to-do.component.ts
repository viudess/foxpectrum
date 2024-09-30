import { Tarefa } from './../../../Tarefa';
import { TaskService } from './../../../services/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario-to-do',
  templateUrl: './calendario-to-do.component.html',
  styleUrl: './calendario-to-do.component.css'
})
export class CalendarioToDoComponent implements OnInit {
  tarefas: Tarefa[] = [];

  constructor(private taskService:TaskService){

  }
  ngOnInit(): void{

    this.taskService.getTasks().subscribe((dado) => {
      this.tarefas = dado;
      console.log(dado);
    });

  }

  deleteTask(tarefa : Tarefa){
    this.taskService.deleteTask(tarefa).subscribe(() => (this.tarefas = this.tarefas.filter((t) => t.id == tarefa.id)));
  }
}
