export interface Modelo {
  id: number;
  nombre: string;
  slug: string;
  descripcionCorta: string;
  descripcionLarga: string;
  imagenPrincipal: string;
  imagenCard: string;
  galeria: string[];
  videoUrl?: string;
  precio: number;
  especificaciones: {
    motor: string;
    potencia: string;
    transmision: string;
    traccion: string;
    consumo: string;
    aceleracion?: string;
    velocidadMaxima?: string;
  };
  caracteristicas: string[];
  versiones?: {
    nombre: string;
    precio: number;
    caracteristicas: string[];
  }[];
}
