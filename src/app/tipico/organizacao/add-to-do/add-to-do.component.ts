import { Component } from '@angular/core';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrl: './add-to-do.component.css'
})
export class AddToDoComponent {
  tasks: {
    tarefa: string,
    membros: string,
    horario: string,
    periodo: string,
    data: string,
    clicado: boolean
  }[] = [];

  newTask = {
    tarefa: '',
    membros: '',
    hora: '',
    minuto: '',
    periodo: 'AM',
    dataSelecionada: 0
  };

  // Alterna o AM/PM
  alternarAmPm() {
    this.newTask.periodo = this.newTask.periodo === 'AM' ? 'PM' : 'AM';
  }

  mudarCor(index: number) {
    this.newTask.dataSelecionada = index;
  }

  addTask() {
    const horario = `${this.newTask.hora}:${this.newTask.minuto} ${this.newTask.periodo}`;
    const data = this.newTask.dataSelecionada === 0 ? 'Hoje' :
                 this.newTask.dataSelecionada === 1 ? 'Diário' : 'Data';

    if (this.newTask.tarefa.trim() && this.newTask.membros.trim()) {
      this.tasks.push({
        tarefa: this.newTask.tarefa,
        membros: this.newTask.membros,
        horario: horario,
        periodo: this.newTask.periodo,
        data: data,
        clicado: false
      });

      this.newTask = {
        tarefa: '',
        membros: '',
        hora: '',
        minuto: '',
        periodo: 'AM',
        dataSelecionada: 0
      };
    }
  }

  toggleTaskStatus(index: number) {
    this.tasks[index].clicado = !this.tasks[index].clicado;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
