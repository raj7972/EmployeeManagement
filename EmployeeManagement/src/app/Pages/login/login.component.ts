import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  showPassword: boolean = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Toggle Password Visibility
  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  // Handle Form Submission
  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Login Successful:', this.loginForm.value);
      alert('Login Successful!');
    } else {
      this.loginForm.markAllAsTouched(); // Show all validation errors
    }
  }

  forgotPassword(): void {
    alert('Redirecting to Forgot Password Page...');
  }
}
