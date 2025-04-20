import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStore } from './auth.store';

export const redirectIfAuthenticatedGuard: CanActivateFn = () => {
  const router = inject(Router);

  if (AuthStore.isAuthenticated()) {
    router.navigate(['/home']);
    return false;
  }

  return true;
};
