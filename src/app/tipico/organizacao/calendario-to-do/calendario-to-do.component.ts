import { Component } from '@angular/core';

@Component({
  selector: 'app-calendario-to-do',
  templateUrl: './calendario-to-do.component.html',
  styleUrl: './calendario-to-do.component.css'
})
export class CalendarioToDoComponent {
  tarefas = [
    { dia: 'Segunda-feira', descricao: 'Comprar leite', horario: '09:00' },
    { dia: 'Terça-feira', descricao: 'Fazer reunião', horario: '14:00' }
  ];

}
