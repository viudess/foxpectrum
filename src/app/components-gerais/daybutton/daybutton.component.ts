import { Component } from '@angular/core';

@Component({
  selector: 'app-daybutton',
  templateUrl: './daybutton.component.html',
  styleUrl: './daybutton.component.css'
})
export class DaybuttonComponent {
  clicado = [false, false, false, false, false];

  mudarCor(index: number) {
    this.clicado[index] = !this.clicado[index];
  }
}
