import { Component } from '@angular/core';

@Component({
  selector: 'app-top-card',
  standalone: true,
  imports: [],
  templateUrl: './top-card.component.html',
  styleUrl: './top-card.component.scss'
})
export class TopCardComponent {
  topCardTitle="Blog #AjudaRS";
  topCardDesc="Repositório com alguns veículos de informação e ferramentas úteis";
}
