# 🚗 Landing Page Ford - Angular

Landing page moderna y profesional para concesionaria Ford, desarrollada con Angular y Angular Material.

Este proyecto fue generado usando [Angular CLI](https://github.com/angular/angular-cli) versión 20.3.6.

## 📋 Características del Proyecto

- ✅ **Navegación con dropdown dinámico** de modelos en el header
- ✅ **Hero section** con video de fondo fullscreen y contenido superpuesto
- ✅ **Carrusel interactivo** con controles, autoplay y transiciones
- ✅ **Grid responsive** de modelos en 3 columnas
- ✅ **Páginas de detalle** con galería interactiva y especificaciones técnicas
- ✅ **Formulario de contacto** con validaciones completas
- ✅ **Botón flotante de WhatsApp** visible en todas las rutas
- ✅ **Diseño 100% responsive** optimizado para móviles y tablets

## 🏗️ Estructura del Proyecto

```
src/app/
├── core/
│   ├── models/              # Interfaces TypeScript (Modelo)
│   └── services/            # Servicios (ModelosService)
├── shared/
│   ├── components/
│   │   ├── header/         # Navegación principal con dropdown
│   │   └── footer/         # Pie de página con info y links
│   └── shared.module.ts
├── features/
│   ├── home/               # Página principal con hero y carrusel
│   ├── modelos/
│   │   ├── modelos-list/   # Grid de modelos disponibles
│   │   └── modelo-detail/  # Detalle completo del modelo
│   └── contacto/           # Formulario y datos de contacto
├── app.component.*         # Componente raíz + botón WhatsApp
├── app.module.ts           # Módulo principal
└── app-routing.module.ts   # Configuración de rutas
```

## 🎨 Tecnologías y Librerías

- **Framework:** Angular 20+
- **UI Components:** Angular Material
- **Estilos:** SCSS con diseño responsivo
- **Routing:** Angular Router con scroll restoration
- **Forms:** Reactive Forms con validaciones

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
