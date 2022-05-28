import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable, ReplaySubject, retry} from "rxjs";
import {Users} from "../layout/login/login.interface";
import {CookieService} from "ngx-cookie-service";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService) {
  }

  private user$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  //private users$: ReplaySubject<string | null>(1);


  getUser(): Observable<string | null> {
    return this.user$.asObservable();
  }

  setUser(user: string | null) {
    this.user$.next(user);
  }

  logOut(){
    this.cookieService.deleteAll();
    this.user$.next(null);
  }

  isLogin$(): Observable<boolean> {
    return this.user$.pipe(map(user => {
      return !!user
    }));
  }

}
