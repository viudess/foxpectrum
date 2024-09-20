import { Component } from '@angular/core';

@Component({
  selector: 'app-add-calendario',
  templateUrl: './add-calendario.component.html',
  styleUrl: './add-calendario.component.css'
})
export class AddCalendarioComponent {
  clicado: number | null = 0;
  periodo: string = 'AM';

  mudarCor(index: number) {
    this.clicado = index;
  }

  alternarAmPm() {
    this.periodo = this.periodo === 'AM' ? 'PM' : 'AM';
  }
}
