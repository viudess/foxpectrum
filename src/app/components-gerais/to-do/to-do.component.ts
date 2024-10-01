import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { Tarefa } from '../../Tarefa';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {

  @Input() tarefa!:Tarefa;
  @Output() onDeleteTask = new EventEmitter<Tarefa>();
  @Output() onToggleConcluido = new EventEmitter<Tarefa>();

  onDelete(tarefa: Tarefa){
    this.onDeleteTask.emit(tarefa);
  }

  onToggle(tarefa: Tarefa){
    this.onToggleConcluido.emit(tarefa);
  }
}
