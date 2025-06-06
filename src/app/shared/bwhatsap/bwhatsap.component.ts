import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bwhatsap',
  standalone: false,
  templateUrl: './bwhatsap.component.html',
  styleUrl: './bwhatsap.component.css'
})
export class BwhatsapComponent {
  @Input() phoneNumber: string = '310507669'; // Reemplaza con tu número
  @Input() message: string = 'Hola, me interesa tu servicio'; // Mensaje predeterminado
  @Input() position: 'left' | 'right' = 'right'; // Posición del botón
  @Input() bottom: string = '4'; // Distancia desde abajo (en rem)
  @Input() showText: boolean = true; // Mostrar texto junto al ícono

  get whatsappLink(): string {
    const encodedMessage = encodeURIComponent(this.message);
    return `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
  }

  get positionClass(): string {
    return this.position === 'right' ? 'right-4' : 'left-4';
  }

  get bottomClass(): string {
    return `bottom-${this.bottom}`;
  }
}
