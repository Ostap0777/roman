import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      alert('Form is invalid! Please check the fields.');
      return;
    }

    const { firstName, lastName, email, password } = this.registerForm.value;
    
    this.authService.register(firstName, lastName, email, password).subscribe(
      response => {
        alert('Registration successful!'); 
      },
      error => {
        console.error('Registration failed', error); 
        alert('Registration failed! Please try again.');
      }
    );
  }
}