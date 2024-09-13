import { Component } from '@angular/core';

@Component({
  selector: 'app-forms-mood',
  templateUrl: './forms-mood.component.html',
  styleUrl: './forms-mood.component.css'
})
export class FormsMoodComponent {
  emotions = [
    {title: 'Feliz', image: 'alegrar 1.png'},
    {title: 'Triste', image: 'tristeza 1.png'},
    {title: 'Irritado', image: 'irritação 1.png'},
    {title: 'Cansado', image: 'cansaço 1.png'},
    {title: 'Saturado', image: 'saturado 1.png'},
    {title: 'Tranquilo', image: 'tranquilo 1.png'},
    {title: 'Envergonhado', image: 'vergonha 1.png'},
    {title: 'Amado', image: 'amado 1.png'},
    {title: 'Nervoso', image: 'nervos 1.png'},
    {title: 'Enjoado', image: 'nojo 1.png'},
    {title: 'Medroso', image: 'Medo 1.png'},
    {title: 'Aborrecido', image: 'aborrecer 1.png'},
    {title: 'Orgulhoso', image: 'orgulhoso 1.png'},
    {title: 'Preocupado', image: 'preocupado 1.png'},
    {title: 'Ansioso', image: 'ansioso 1.png'},
    {title: 'Curioso', image: 'curioso 1.png'},
    {title: 'Desanimado', image: 'desanimado 1.png'},
    {title: 'Distraído', image: 'distraído 1.png'},
    {title: 'Confuso', image: 'confuso 1.png'},
    {title: 'Indiferente', image: 'estou mais ou menos 1.png'},
    {title: 'Sério', image: 'sério 1.png'},
  ]
}
