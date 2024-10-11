import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
  @Input() nomeEvento!: string;
  @Input() horario!: string;
  @Input() data!: string;
}

