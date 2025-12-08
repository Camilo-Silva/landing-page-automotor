import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socialLinks = [
    { name: 'Facebook', icon: 'public', url: 'https://facebook.com/ford' },
    { name: 'Instagram', icon: 'photo_camera', url: 'https://instagram.com/ford' },
    { name: 'Twitter', icon: 'alternate_email', url: 'https://twitter.com/ford' },
    { name: 'YouTube', icon: 'play_circle', url: 'https://youtube.com/ford' }
  ];

  quickLinks = [
    { name: 'Inicio', route: '/home' },
    { name: 'Modelos', route: '/modelos' },
    { name: 'Contacto', route: '/contacto' }
  ];
}
