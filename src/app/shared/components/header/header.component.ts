import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  modelos = [
    {
      nombre: 'Territory',
      slug: 'territory',
      imagen: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=300&q=80',
      descripcion: 'SUV tecnológico'
    },
    {
      nombre: 'Ranger',
      slug: 'ranger',
      imagen: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=300&q=80',
      descripcion: 'Pickup robusta'
    },
    {
      nombre: 'Mustang',
      slug: 'mustang',
      imagen: 'https://images.unsplash.com/photo-1584345604476-8ec5f2fe01e2?w=300&q=80',
      descripcion: 'Deportivo icónico'
    },
    {
      nombre: 'Maverick',
      slug: 'maverick',
      imagen: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=300&q=80',
      descripcion: 'Pickup compacta'
    },
    {
      nombre: 'Bronco',
      slug: 'bronco',
      imagen: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=300&q=80',
      descripcion: 'SUV todoterreno'
    },
    {
      nombre: 'F-150',
      slug: 'f-150',
      imagen: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=300&q=80',
      descripcion: 'Pickup premium'
    }
  ];

  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
