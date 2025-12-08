import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ModelosService } from '../../../core/services/modelos.service';
import { Modelo } from '../../../core/models/modelo.interface';

@Component({
  selector: 'app-modelos-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './modelos-list.component.html',
  styleUrls: ['./modelos-list.component.scss']
})
export class ModelosListComponent implements OnInit {
  modelos: Modelo[] = [];
  loading = true;

  constructor(
    private modelosService: ModelosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadModelos();
  }

  loadModelos() {
    this.modelosService.getModelos().subscribe({
      next: (modelos) => {
        this.modelos = modelos;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al cargar modelos:', error);
        this.loading = false;
      }
    });
  }

  verDetalle(slug: string) {
    this.router.navigate(['/modelos', slug]);
  }

  formatPrecio(precio: number): string {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(precio);
  }
}
