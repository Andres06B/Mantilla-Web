import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showPopup = false;
  menuOpen = false;
  activeSection = 'Inicio';
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  smoothScroll(targetId: string): void {
    this.menuOpen = false;
    const target = document.getElementById(targetId);
    if (target) {
      const startPosition = window.pageYOffset;
      const targetPosition = target.getBoundingClientRect().top + startPosition - 80;
      const distance = targetPosition - startPosition;
      const duration = 800;
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        window.scrollTo(0, startPosition + distance * progress);
        if (timeElapsed < duration) window.requestAnimationFrame(animation);
      };

      window.requestAnimationFrame(animation);
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const sections = ['Inicio', 'Servicios', 'Portafolio', 'Proceso', 'Blog', 'FAQ', 'Contacto'];
    const scrollPosition = window.pageYOffset + 150;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.activeSection = section;
          break;
        }
      }
    }
  }
}
