import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarefa } from '../../Tarefa';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
  clicado: boolean = false;

  mudarCor(){
    this.clicado = !this.clicado;
  }

  @Input() tarefa!:Tarefa;
  @Output() onDeleteTask = new EventEmitter<Tarefa>();

  onDelete(tarefa: Tarefa){
    this.onDeleteTask.emit(tarefa)
  }
}
