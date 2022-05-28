import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AuthService} from "../states/auth.service";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent implements OnInit {


  constructor(private authService: AuthService, private router: Router, private cookieService: CookieService,private changeDetectorRef: ChangeDetectorRef) {
  }

  logOut() {
    this.authService.logOut();
    this.router.navigate(['/login']).then();
  }

  isLoggedIn() {
    this.changeDetectorRef.markForCheck();
    return this.cookieService.get('isLoggedIn');
  }


  ngOnInit(): void {
    this.isLoggedIn();
  }

}
