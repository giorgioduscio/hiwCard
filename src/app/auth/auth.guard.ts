import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  )=> {
    
    const authService=inject(AuthService);
    const router=inject(Router);
    
    if(authService.authenticated())
      return true;
    else{
      router.navigate(['login']);
      return false
    }
};
