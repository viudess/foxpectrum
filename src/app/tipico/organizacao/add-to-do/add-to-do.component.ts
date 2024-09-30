import { Component } from '@angular/core';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrl: './add-to-do.component.css'
})
export class AddToDoComponent {
  clicado: number | null = 0;
  periodo: string = 'AM';

  mudarCor(index: number) {
    this.clicado = index;
  }

  alternarAmPm() {
    this.periodo = this.periodo === 'AM' ? 'PM' : 'AM';
  }
}
