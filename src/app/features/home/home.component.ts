import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface CarouselItem {
  type: 'image' | 'video';
  url: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;

  // Video de fondo para el hero (debe estar en public/videos/)
  heroVideoUrl = 'videos/hero-video.mp4';

  // Items del carrusel
  carouselItems: CarouselItem[] = [
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&q=80',
      title: 'Tecnología Avanzada',
      description: 'Sistema de infoentretenimiento SYNC 4'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80',
      title: 'Diseño Exterior',
      description: 'Líneas deportivas y elegantes'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
      title: 'Interior Premium',
      description: 'Confort y lujo en cada detalle'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&q=80',
      title: 'Performance',
      description: 'Potencia y eficiencia combinadas'
    }
  ];

  currentSlide = 0;
  autoPlayInterval: any;

  ngOnInit() {
    this.startAutoPlay();
  }

  ngAfterViewInit() {
    // Forzar reproducción del video después de que la vista se cargue
    if (this.heroVideo && this.heroVideo.nativeElement) {
      const video = this.heroVideo.nativeElement;
      video.muted = true;
      video.play().catch(error => {
        console.log('Error al reproducir video:', error);
      });
    }
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  features = [
    {icon: 'speed', title: 'Performance', desc: 'Motor turbocargado con máxima eficiencia'},
    {icon: 'security', title: 'Seguridad', desc: 'Co-Pilot360 con tecnología avanzada'},
    {icon: 'smartphone', title: 'Conectividad', desc: 'SYNC 4 con pantalla táctil de 12.3 pulgadas'},
    {icon: 'eco', title: 'Eficiencia', desc: 'Optimización de consumo inteligente'}
  ];

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.carouselItems.length;
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0
      ? this.carouselItems.length - 1
      : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  pauseAutoPlay() {
    this.stopAutoPlay();
  }

  resumeAutoPlay() {
    this.startAutoPlay();
  }
}
