import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { EmployeeComponent } from './Pages/employee/employee.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { ProjectComponent } from './Pages/project/project.component';
import { ProjectEmployeesComponent } from './Pages/project-employees/project-employees.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    EmployeeComponent,
    DashboardComponent,
    ProjectComponent,
    ProjectEmployeesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
