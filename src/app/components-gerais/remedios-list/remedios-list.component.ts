import { Component } from '@angular/core';

@Component({
  selector: 'app-remedios-list',
  templateUrl: './remedios-list.component.html',
  styleUrl: './remedios-list.component.css'
})
export class RemediosListComponent {
  medicacoes = [
    {nomeRemedio: 'Rivotril', horario: '20:00', quantidade:'10ML', vezes:'1x por dia'},
    {nomeRemedio: 'Atroveran', horario: '20:00 - 21:00 - 22:00', quantidade:'50ML', vezes:'3x por dia'},
  ];
}
