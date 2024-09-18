import { Component } from '@angular/core';

@Component({
  selector: 'app-daybutton',
  templateUrl: './daybutton.component.html',
  styleUrl: './daybutton.component.css'
})
export class DaybuttonComponent {
  clicado: number | null = null;

  mudarCor(index: number) {
    if (this.clicado === index) {
      this.clicado = null;
    } else {
      this.clicado = index;
    }
  }
}
