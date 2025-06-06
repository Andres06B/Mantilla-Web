import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: false,
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  contactForm: FormGroup;
  services = [
    'Diseño Gráfico',
    'Desarrollo Web',
    'Marketing Digital',
    'Branding',
    'Otro'
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      company: [''],
      email: ['', [Validators.required, Validators.email]],
      whatsapp: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      service: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Formulario enviado:', this.contactForm.value);
      // Aquí puedes agregar la lógica para enviar el formulario
      alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
