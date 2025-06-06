import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: false,
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FAQComponent {
 // Cambia el tamaño del array según la cantidad de preguntas
  openStates: boolean[] = [false, false, false, false];

  toggle(index: number): void {
    this.openStates[index] = !this.openStates[index];
  }
}
