import { Component } from '@angular/core';

@Component({
  selector: 'app-remedios-list',
  templateUrl: './remedios-list.component.html',
  styleUrl: './remedios-list.component.css'
})
export class RemediosListComponent {
  medicacoes = [
    {nomeRemedio: 'Remédio', horario: '20:00', quantidade:'10ML', vezes:'1x por dia'},
    {nomeRemedio: 'Remédio', horario: '20:00', quantidade:'10ML', vezes:'1x por dia'},
  ];
}
