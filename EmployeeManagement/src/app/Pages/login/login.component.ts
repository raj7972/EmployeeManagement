import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {EmployeeManagementService } from 'src/app/employee.service';
import { LoginRequest } from 'src/app/login-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  showPassword: boolean = false;

  constructor(private fb: FormBuilder, private _employeservice : EmployeeManagementService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  username: string = '';
  password: string = '';

  onLogin(): void {
    if (this.loginForm.invalid) {
      console.log("not working");
      
      return;
    }


    const loginData: LoginRequest = this.loginForm.value;

    this._employeservice.login(loginData).subscribe({
      next: (response) => {
        console.log('Login Successful!', response);
        alert('Login Successful!');
        localStorage.setItem('token', response.token); // Store token for authentication
      },
      error: (err: any) => {
        console.error('Login Failed:', err);
     
      },
    });
  }
}
