import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: false,
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  orderForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.orderForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      orderType: ['', Validators.required],
      requiredDate: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.orderForm.valid) {
      console.log('Formulario enviado:', this.orderForm.value);
      // Aquí iría la lógica para enviar el formulario
      alert('¡Gracias por tu pedido! Nos pondremos en contacto contigo pronto.');
      this.orderForm.reset();
    } else {
      alert('Por favor completa todos los campos requeridos correctamente.');
    }
  }
}
