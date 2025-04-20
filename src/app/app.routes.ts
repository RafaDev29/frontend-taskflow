import { Routes } from '@angular/router';
import { authGuard } from './core/auth.guard';
import { redirectIfAuthenticatedGuard } from './core/redirectIfAuthenticated.guard';
export const routes: Routes = [
  {
    path: 'login',
    canActivate: [redirectIfAuthenticatedGuard],
    loadComponent: () =>
      import('./auth/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'home',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./home.component').then((m) => m.HomeComponent),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  
];
