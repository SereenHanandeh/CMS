import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './core/guards/Auth/auth.guard';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';
import { PatientLayoutComponent } from './layouts/patient-layout/patient-layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },

  {
    path: 'admin',
    canActivate: [authGuard],
    data: { roles: ['admin'] },
    component: AdminLayoutComponent,
  },
  {
    path: 'doctor',
    canActivate: [authGuard],
    data: { roles: ['doctor'] },
    component: DoctorLayoutComponent,
  },
  {
    path: 'patient',
    canActivate: [authGuard],
    data: { roles: ['patient'] },
    component: PatientLayoutComponent,
  },

  { path: '**', component: NotFoundComponent },
];
