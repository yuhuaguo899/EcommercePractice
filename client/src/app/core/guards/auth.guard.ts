import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from 'src/app/account/account.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private accountService: AccountService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // to see if we have a user
    return this.accountService.currentUser$.pipe(
      map((auth) => {
        if (auth) {
          return true;
        }
        // if no user, navigateback to account/login, otherwise, redirect to checkout url
        this.router.navigate(['account/login'], {
          queryParams: { returnUrl: state.url },
        });
      })
    );
  }
}
