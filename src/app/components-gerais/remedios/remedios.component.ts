import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-remedios',
  templateUrl: './remedios.component.html',
  styleUrl: './remedios.component.css'
})
export class RemediosComponent {
  @Input() nomeRemedio!: string;
  @Input() horario!: string;
  @Input() quantidade!: string;
  @Input() vezes!: string;
}
