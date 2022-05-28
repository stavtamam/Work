import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {AuthService} from "../../states/auth.service";
import {map, Observable, switchMap} from "rxjs";
import {Users} from "./login.interface";
import {CookieService} from "ngx-cookie-service";

 const  BASE_URL = `http://localhost:3000`;
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
    private cookieService: CookieService
  ) {}

  getUser(userEmail: string): Observable<Users[]>{
    let params: HttpParams = new HttpParams();
    params = params.append('email', userEmail)
    return this.httpClient.get<Users[]>(`${BASE_URL}/users`,{params});

  }

  login(user: string): Observable<any> {
    return this.getUser(user).pipe(
      map(u => {
      if (u[0].email){
       this.cookieService.set('userEmail',`${u[0].email}`);
        this.cookieService.set('username',`${u[0].name}`);
        this.authService.setUser(u[0].email);
      }
    }));
  }


}
