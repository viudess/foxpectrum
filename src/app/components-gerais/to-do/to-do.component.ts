import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
  tasks: { dia: string, tarefa: string, horario: string, clicado: boolean }[] = [];
  newTask = {
    dia: '',
    tarefa: '',
    horario: ''
  };

  addTask() {
    if (this.newTask.dia.trim() && this.newTask.tarefa.trim() && this.newTask.horario.trim()) {
      this.tasks.push({
        dia: this.newTask.dia,
        tarefa: this.newTask.tarefa,
        horario: this.newTask.horario,
        clicado: false
      });
      this.newTask = { dia: '', tarefa: '', horario: '' };
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  toggleTaskStatus(index: number) {
    this.tasks[index].clicado = !this.tasks[index].clicado;
  }

}
