import { Component } from '@angular/core';

@Component({
  selector: 'app-daybutton',
  templateUrl: './daybutton.component.html',
  styleUrl: './daybutton.component.css'
})
export class DaybuttonComponent {
  clicado: number | null = null;

  mudarCor(index: number) {
    this.clicado = index;
  }
}
