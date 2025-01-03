import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInput } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { validacionAsincronaPrueba } from '../validacionAsincronaPrueba';


@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInput, MatButtonModule, RouterLink,
    MatProgressSpinnerModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  private readonly formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name: ['', {
      validators: [Validators.required],
      asyncValidators: [validacionAsincronaPrueba()],
      updateOn: 'blur'
    }]
  })

  saveChanges(){
    // ... salvar los datos
  }
}
