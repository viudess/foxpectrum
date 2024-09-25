import { Component } from '@angular/core';

@Component({
  selector: 'app-med-editar',
  templateUrl: './med-editar.component.html',
  styleUrl: './med-editar.component.css'
})
export class MedEditarComponent {
  horarios: { hora: string, minuto: string, periodo: string }[] = [
    { hora: '', minuto: '', periodo: 'AM' }
  ];

  alternarAmPm(index: number) {
    this.horarios[index].periodo = this.horarios[index].periodo === 'AM' ? 'PM' : 'AM';
  }

  adicionarHorario() {
    this.horarios.push({ hora: '', minuto: '', periodo: 'AM' });
  }

  removerHorario(index: number) {
    this.horarios.splice(index, 1);
  }
}
