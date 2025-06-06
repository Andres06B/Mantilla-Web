import { Component } from '@angular/core';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  author: string;
}

@Component({
  selector: 'app-blog',
  standalone: false,
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Cómo lograr un branding efectivo',
      excerpt: 'Descubre las estrategias clave para construir una identidad de marca memorable y coherente que conecte con tu audiencia.',
      category: 'Branding',
      date: '15 Mar 2023',
      readTime: '5 min',
      imageUrl:'https://imgs.search.brave.com/U1qz-orT9dWM0A4tBQcm9M60XwEmKENi9rSVLR8qjQ8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9iZWJy/YW5kLmNvbS5lcy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/NC8yMDIxLTA0LTI3/LWUxNjUzMzg1NTYw/NDA5LmpwZw',
      author: 'María Gómez'
    },
    {
      id: 2,
      title: 'Errores comunes en publicidad visual',
      excerpt: 'Evita estos 7 errores frecuentes que pueden arruinar tus campañas de marketing visual y cómo solucionarlos.',
      category: 'Publicidad',
      date: '28 Abr 2023',
      readTime: '7 min',
      imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      author: 'Carlos Rodríguez'
    },
    {
      id: 3,
      title: 'Tendencias de diseño para este año',
      excerpt: 'Las 10 tendencias de diseño gráfico que dominarán este año y cómo aplicarlas en tus proyectos creativos.',
      category: 'Diseño',
      date: '10 May 2023',
      readTime: '8 min',
      imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      author: 'Ana Martínez'
    },
    {
      id: 4,
      title: 'Psicología del color en marketing',
      excerpt: 'Cómo los colores influyen en las decisiones de compra y cómo seleccionar la paleta perfecta para tu marca.',
      category: 'Marketing',
      date: '22 Jun 2023',
      readTime: '6 min',
      imageUrl: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      author: 'Luis Fernández'
    }
  ];

  featuredPost = this.blogPosts[0];
}
