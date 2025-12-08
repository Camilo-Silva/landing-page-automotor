import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatDividerModule
  ],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  contactForm!: FormGroup;
  formSubmitted = false;
  modeloPreseleccionado: string | null = null;

  modelos = [
    'Territory',
    'Ranger',
    'Mustang',
    'Maverick',
    'Bronco',
    'F-150',
    'Otro'
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.initForm();

    // Verificar si viene un modelo preseleccionado desde query params
    this.route.queryParams.subscribe(params => {
      if (params['modelo']) {
        this.modeloPreseleccionado = params['modelo'];
        this.contactForm.patchValue({
          modeloInteres: params['modelo']
        });
      }
    });
  }

  initForm() {
    this.contactForm = this.fb.group({
      nombreCompleto: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9\-\+\s\(\)]{8,20}$/)]],
      modeloInteres: ['', Validators.required],
      mensaje: ['', [Validators.required, Validators.minLength(10)]],
      aceptaPolitica: [false, Validators.requiredTrue]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.formSubmitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', this.contactForm.value);

    // Simulación de envío exitoso
    alert('¡Gracias por tu consulta! Nos pondremos en contacto contigo pronto.');

    // Resetear formulario
    this.contactForm.reset();
    this.formSubmitted = false;
  }

  getErrorMessage(fieldName: string): string {
    const field = this.contactForm.get(fieldName);

    if (field?.hasError('required')) {
      return 'Este campo es requerido';
    }

    if (field?.hasError('email')) {
      return 'Ingresa un email válido';
    }

    if (field?.hasError('minlength')) {
      const minLength = field.errors?.['minlength'].requiredLength;
      return `Mínimo ${minLength} caracteres`;
    }

    if (field?.hasError('pattern')) {
      return 'Formato de teléfono inválido';
    }

    return '';
  }
}
