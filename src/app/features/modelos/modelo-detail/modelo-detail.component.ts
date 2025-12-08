import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class ModeloDetailComponent implements OnInit, OnDestroy {
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
