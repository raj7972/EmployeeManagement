import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { EmployeeComponent } from './Pages/employee/employee.component';
import { ProjectComponent } from './Pages/project/project.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect empty path to login
  { path: 'login', component: LoginComponent }, // Login Route
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      { path: 'project', component: ProjectComponent },
      { path: 'employee', component: EmployeeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Important: Ensure forRoot is used
  exports: [RouterModule],
})
export class AppRoutingModule {}
