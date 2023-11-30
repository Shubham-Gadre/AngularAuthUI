import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HotToastService } from '@ngneat/hot-toast';

export const authGuard: CanActivateFn = (route, state) => {
  let _router = inject(Router);
  let _authService=inject(AuthService);
  let _toaster = inject(HotToastService);
  if (_authService.isLoggedIn()) {
    return true;
  }
  else
  {
    _toaster.error('Please login first.');
    _router.navigate(['login']);
    return false;
  }
};
