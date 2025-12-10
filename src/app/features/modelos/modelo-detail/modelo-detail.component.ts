import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ModelosService } from '../../../core/services/modelos.service';
import { Modelo } from '../../../core/models/modelo.interface';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-modelo-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './modelo-detail.component.html',
  styleUrls: ['./modelo-detail.component.scss']
})
export class ModeloDetailComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('modeloVideo') modeloVideo!: ElementRef<HTMLVideoElement>;
  modelo: Modelo | undefined;
  loading = true;
  imagenSeleccionada = 0;
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modelosService: ModelosService
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        const slug = params['nombreModelo'];
        this.loadModelo(slug);
      });
  }

  ngAfterViewInit() {
    // Forzar reproducción del video después de que la vista se cargue
    if (this.modeloVideo && this.modeloVideo.nativeElement) {
      const video = this.modeloVideo.nativeElement;

      // CRÍTICO: Pausar inmediatamente para evitar audio inicial
      video.pause();
      video.currentTime = 0;

      // Configurar el video para estar siempre silenciado ANTES de cualquier reproducción
      video.muted = true;
      video.volume = 0;
      video.defaultMuted = true;

      // Prevenir que el volumen se cambie
      video.addEventListener('volumechange', () => {
        if (!video.muted) {
          video.muted = true;
          video.volume = 0;
        }
      });

      // Esperar a que se carguen los metadatos y LUEGO reproducir
      video.addEventListener('loadedmetadata', () => {
        video.muted = true;
        video.volume = 0;
        // Pequeño delay para asegurar que muted está aplicado
        setTimeout(() => {
          video.play().catch(error => {
            console.log('Error al reproducir video:', error);
          });
        }, 50);
      });

      // Si ya está cargado, aplicar directamente
      if (video.readyState >= 1) {
        video.muted = true;
        video.volume = 0;
        setTimeout(() => {
          video.play().catch(error => {
            console.log('Error al reproducir video:', error);
          });
        }, 50);
      }
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadModelo(slug: string) {
    this.loading = true;
    this.modelosService.getModeloBySlug(slug).subscribe({
      next: (modelo) => {
        if (modelo) {
          this.modelo = modelo;
          this.imagenSeleccionada = 0;
        } else {
          // Modelo no encontrado, redirigir a la lista
          this.router.navigate(['/modelos']);
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al cargar modelo:', error);
        this.loading = false;
        this.router.navigate(['/modelos']);
      }
    });
  }

  seleccionarImagen(index: number) {
    this.imagenSeleccionada = index;
  }

  formatPrecio(precio: number): string {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(precio);
  }

  volverALista() {
    this.router.navigate(['/modelos']);
  }

  contactar() {
    this.router.navigate(['/contacto'], {
      queryParams: { modelo: this.modelo?.nombre }
    });
  }
}
