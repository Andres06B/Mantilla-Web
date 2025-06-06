import { Component } from '@angular/core';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  mockupType: 'laptop' | 'mobile' | 'magazine' | 'packaging' | 'stationery' | 'dashboard';
}

@Component({
  selector: 'app-portafolio',
  standalone: false,
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css'
})
export class PortafolioComponent {
activeFilter: string = 'all';
  displayedItems: number = 6;
  allItemsLoaded: boolean = false;

  portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Identidad Corporativa',
      description: 'Diseño de marca completa para empresa de tecnología incluyendo logo, colores y aplicaciones.',
      category: 'branding',
      imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      mockupType: 'laptop'
    },
    {
      id: 2,
      title: 'App Móvil Financiera',
      description: 'Diseño de interfaz de usuario y experiencia para aplicación bancaria móvil.',
      category: 'digital',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      mockupType: 'mobile'
    },
    {
      id: 3,
      title: 'Revista Corporativa',
      description: 'Diseño editorial y diagramación para revista anual de empresa multinacional.',
      category: 'impresos',
      imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      mockupType: 'magazine'
    },
    {
      id: 4,
      title: 'Línea de Empaques',
      description: 'Diseño estructural y gráfico para línea de productos orgánicos.',
      category: 'empaques',
      imageUrl: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      mockupType: 'packaging'
    },
    {
      id: 5,
      title: 'Papelería Corporativa',
      description: 'Diseño de identidad visual completa para estudio de abogados.',
      category: 'branding',
      imageUrl: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      mockupType: 'stationery'
    },
    {
      id: 6,
      title: 'Panel de Control',
      description: 'Diseño de interfaz para sistema de análisis de datos en tiempo real.',
      category: 'digital',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      mockupType: 'dashboard'
    }
  ];

  filteredItems: PortfolioItem[] = [...this.portfolioItems];

  constructor() { }

  ngOnInit(): void {
  }

  filterItems(category: string): void {
    this.activeFilter = category;
    if (category === 'all') {
      this.filteredItems = [...this.portfolioItems];
    } else {
      this.filteredItems = this.portfolioItems.filter(item => item.category === category);
    }
    this.displayedItems = 6;
    this.allItemsLoaded = false;
  }

  loadMore(): void {
    // In a real app, you would fetch more data from a service
    // For this example, we'll just show all items
    this.displayedItems = this.filteredItems.length;
    this.allItemsLoaded = true;
  }

  getVisibleItems(): PortfolioItem[] {
    return this.filteredItems.slice(0, this.displayedItems);
  }
}
