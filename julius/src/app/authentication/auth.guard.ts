import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AccountService,
    private router: Router
  )
  { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const route = next.routeConfig.path;
    if (this.authService.isLogged()) {
      return true;
    }

    this.router.navigate(
      ['/login'], { queryParams: { redirect: state.url }, replaceUrl: true }
    );
    return false;
  }
  
}
