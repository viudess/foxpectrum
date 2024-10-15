import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos-list',
  templateUrl: './eventos-list.component.html',
  styleUrl: './eventos-list.component.css'
})
export class EventosListComponent {
  eventos=[
    {nomeEvento: 'Evento', data: '31/10', horario:'20:00'},
    {nomeEvento: 'Evento', data: '31/10', horario:'20:00'},
  ]
}
