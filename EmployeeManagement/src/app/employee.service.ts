import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest, LoginResponse } from './login-dto';

@Injectable({
  providedIn: 'root',
})
export class EmployeeManagementService {

  constructor(private http: HttpClient) {}

  login(userData: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('https://projectapi.gerasim.in/api/EmployeeManagement/login', userData);
  }
}
