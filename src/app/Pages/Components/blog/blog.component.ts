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
  authorImage?: string; // Nueva propiedad opcional
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
      title: 'Cómo lograr un branding efectivo que impacte',
      excerpt: 'Descubre las estrategias clave para construir una identidad de marca memorable y coherente que conecte profundamente con tu audiencia objetivo.',
      category: 'BRANDING',
      date: '15 MAR 2023',
      readTime: '5',
      imageUrl: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
      author: 'María Gómez',
      authorImage: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 2,
      title: 'Errores críticos en publicidad visual que debes evitar',
      excerpt: 'Los 7 errores más frecuentes que arruinan campañas de marketing visual y las soluciones estratégicas para cada caso.',
      category: 'PUBLICIDAD',
      date: '28 ABR 2023',
      readTime: '7',
      imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
      author: 'Carlos Rodríguez',
      authorImage: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 3,
      title: 'Tendencias de diseño gráfico que dominarán este año',
      excerpt: 'Explora las 10 tendencias visuales más impactantes y aprende a aplicarlas en tus proyectos creativos de manera efectiva.',
      category: 'DISEÑO',
      date: '10 MAY 2023',
      readTime: '8',
      imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
      author: 'Ana Martínez',
      authorImage: 'https://randomuser.me/api/portraits/women/63.jpg'
    },
    {
      id: 4,
      title: 'Psicología del color: influencia en decisiones de compra',
      excerpt: 'Análisis profundo de cómo los colores afectan el comportamiento del consumidor y guía para seleccionar tu paleta ideal.',
      category: 'MARKETING',
      date: '22 JUN 2023',
      readTime: '6',
      imageUrl: 'https://images.unsplash.com/photo-1558470598-a5dda9640f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
      author: 'Luis Fernández',
      authorImage: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
      id: 5,
      title: 'Fotografía comercial que vende: técnicas profesionales',
      excerpt: 'Domina las técnicas que usan los fotógrafos profesionales para crear imágenes que aumentan las conversiones.',
      category: 'FOTOGRAFÍA',
      date: '05 JUL 2023',
      readTime: '9',
      imageUrl: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
      author: 'Sofía Ramírez',
      authorImage: 'https://randomuser.me/api/portraits/women/25.jpg'
    },
    {
      id: 6,
      title: 'UX/UI: Diseñando experiencias memorables',
      excerpt: 'Principios fundamentales para crear interfaces que no solo sean bellas sino también intuitivas y funcionales.',
      category: 'DISEÑO UX',
      date: '18 AGO 2023',
      readTime: '10',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
      author: 'Javier López',
      authorImage: 'https://randomuser.me/api/portraits/men/45.jpg'
    }
  ];

  featuredPost = this.blogPosts[0];

  // Función para obtener los posts regulares (excluyendo el destacado)
  get regularPosts(): BlogPost[] {
    return this.blogPosts.filter(post => post.id !== this.featuredPost.id);
  }
}
