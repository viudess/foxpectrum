import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
  dia = 'Hoje';
  tarefa = 'Tarefa';
  horario = '03:00 pm'

  clicado: boolean = false;

  mudarCor(){
    this.clicado = !this.clicado;
  }

}
