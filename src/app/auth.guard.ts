import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import {AuthService} from "./states/auth.service";
import {CookieService} from "ngx-cookie-service";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router, private cookieService: CookieService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | boolean {
    if (this.cookieService.get('isLoggedIn')) {
      return true;
    } else {
      return this.auth.isLogin$()
        .pipe(
          map(isLogin => {
            if (!isLogin) {
              return this.router.createUrlTree(['login']);
            }
            this.cookieService.set('isLoggedIn', `${isLogin}`);
            return true;
          }));
    }
  }

}
