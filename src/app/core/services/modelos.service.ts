import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Modelo } from '../models/modelo.interface';

@Injectable({
  providedIn: 'root'
})
export class ModelosService {
  private modelos: Modelo[] = [
    {
      id: 1,
      nombre: 'Territory',
      slug: 'territory',
      descripcionCorta: 'SUV que lidera la nueva era tecnológica',
      descripcionLarga: 'El Ford Territory combina un diseño moderno con tecnología de vanguardia. Equipado con el sistema de infoentretenimiento SYNC 4 y características de seguridad avanzadas Co-Pilot360™, ofrece una experiencia de conducción única.',
      imagenPrincipal: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&q=80',
      imagenCard: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&q=80',
      galeria: [
        'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&q=80',
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80',
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80'
      ],
      precio: 45000,
      especificaciones: {
        motor: '1.5L EcoBoost Turbo',
        potencia: '143 HP',
        transmision: 'Automática CVT',
        traccion: 'Delantera',
        consumo: '6.8 L/100km',
        aceleracion: '0-100 km/h en 11.5s',
        velocidadMaxima: '180 km/h'
      },
      caracteristicas: [
        'Sistema SYNC 4 con pantalla táctil de 12.3"',
        'Co-Pilot360™ - Tecnología de asistencia al conductor',
        'Cámara de 360°',
        'Control de crucero adaptativo',
        'Techo panorámico',
        'Sensor de estacionamiento'
      ]
    },
    {
      id: 2,
      nombre: 'Ranger',
      slug: 'ranger',
      descripcionCorta: 'La pickup más robusta y versátil',
      descripcionLarga: 'Ford Ranger es sinónimo de robustez y capacidad. Diseñada para el trabajo duro y la aventura, ofrece tracción en las 4 ruedas, gran capacidad de carga y tecnología de última generación.',
      imagenPrincipal: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&q=80',
      imagenCard: 'https://images.unsplash.com/photo-1586339277861-b0b895343ba5?w=600&q=80',
      galeria: [
        'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&q=80',
        'https://images.unsplash.com/photo-1586339277861-b0b895343ba5?w=1200&q=80'
      ],
      precio: 52000,
      especificaciones: {
        motor: '2.0L Bi-Turbo Diesel',
        potencia: '210 HP',
        transmision: 'Automática 10 velocidades',
        traccion: '4x4',
        consumo: '8.5 L/100km'
      },
      caracteristicas: [
        'Capacidad de remolque de 3500 kg',
        'Caja de carga reforzada',
        'Sistema de tracción selectivo',
        'Control de descenso en pendientes',
        'Asientos de cuero'
      ]
    },
    {
      id: 3,
      nombre: 'Mustang',
      slug: 'mustang',
      descripcionCorta: 'Ícono americano de performance',
      descripcionLarga: 'El legendario Ford Mustang combina diseño icónico con performance excepcional. Un deportivo que no pasa desapercibido.',
      imagenPrincipal: 'https://images.unsplash.com/photo-1584345604476-8ec5f2fe01e2?w=1200&q=80',
      imagenCard: 'https://images.unsplash.com/photo-1584345604476-8ec5f2fe01e2?w=600&q=80',
      galeria: [
        'https://images.unsplash.com/photo-1584345604476-8ec5f2fe01e2?w=1200&q=80'
      ],
      precio: 75000,
      especificaciones: {
        motor: '5.0L V8',
        potencia: '460 HP',
        transmision: 'Manual 6 velocidades / Automática 10 vel.',
        traccion: 'Trasera',
        consumo: '12.4 L/100km',
        aceleracion: '0-100 km/h en 4.3s',
        velocidadMaxima: '250 km/h'
      },
      caracteristicas: [
        'Modo de conducción deportivo',
        'Escape activo',
        'Sistema de sonido premium',
        'Pantalla digital de instrumentos',
        'Asientos deportivos Recaro'
      ]
    },
    {
      id: 4,
      nombre: 'Maverick',
      slug: 'maverick',
      descripcionCorta: 'La pickup compacta más eficiente',
      descripcionLarga: 'Ford Maverick reinventa el concepto de pickup compacta con eficiencia híbrida y versatilidad urbana.',
      imagenPrincipal: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80',
      imagenCard: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80',
      galeria: [
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80'
      ],
      precio: 38000,
      especificaciones: {
        motor: '2.5L Híbrido',
        potencia: '191 HP',
        transmision: 'Automática CVT',
        traccion: 'Delantera / 4x4',
        consumo: '5.7 L/100km'
      },
      caracteristicas: [
        'Sistema híbrido completo',
        'Caja de carga multifuncional',
        'FordPass Connect',
        'Espacio de almacenamiento bajo asientos'
      ]
    },
    {
      id: 5,
      nombre: 'Bronco',
      slug: 'bronco',
      descripcionCorta: 'Legendario 4x4 para la aventura',
      descripcionLarga: 'El Ford Bronco regresa con toda su esencia aventurera. Diseñado para conquistar cualquier terreno.',
      imagenPrincipal: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
      imagenCard: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80',
      galeria: [
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80'
      ],
      precio: 68000,
      especificaciones: {
        motor: '2.3L EcoBoost',
        potencia: '300 HP',
        transmision: 'Automática 10 velocidades',
        traccion: '4x4',
        consumo: '11.2 L/100km'
      },
      caracteristicas: [
        'Sistema G.O.A.T. de modos de conducción',
        'Techo y puertas removibles',
        'Protecciones de bajos reforzadas',
        'Enganche de remolque de serie'
      ]
    },
    {
      id: 6,
      nombre: 'F-150',
      slug: 'f-150',
      descripcionCorta: 'La pickup líder en ventas de América',
      descripcionLarga: 'Ford F-150 es la pickup más vendida y confiable. Combina capacidad de trabajo con confort y tecnología.',
      imagenPrincipal: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&q=80',
      imagenCard: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&q=80',
      galeria: [
        'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&q=80'
      ],
      precio: 62000,
      especificaciones: {
        motor: '3.5L V6 EcoBoost',
        potencia: '400 HP',
        transmision: 'Automática 10 velocidades',
        traccion: '4x4',
        consumo: '10.7 L/100km'
      },
      caracteristicas: [
        'Capacidad de remolque hasta 5900 kg',
        'Carrocería de aluminio de alta resistencia',
        'Pro Power Onboard - generador integrado',
        'Sistema de suspensión adaptativa',
        'Interior Premium con pantalla de 12"'
      ]
    }
  ];

  constructor() { }

  // Obtener todos los modelos
  getModelos(): Observable<Modelo[]> {
    return of(this.modelos);
  }

  // Obtener un modelo específico por slug
  getModeloBySlug(slug: string): Observable<Modelo | undefined> {
    const modelo = this.modelos.find(m => m.slug === slug);
    return of(modelo);
  }

  // Obtener un modelo específico por ID
  getModeloById(id: number): Observable<Modelo | undefined> {
    const modelo = this.modelos.find(m => m.id === id);
    return of(modelo);
  }
}
