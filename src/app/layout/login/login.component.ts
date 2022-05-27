import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {Users} from "./login.interface";
import {AuthService} from "../../states/auth.service";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: Users[] = [];
  userValidators = [Validators.required, Validators.email];
  passwordValidators = [Validators.required, Validators.minLength(5)];
  formGroup: FormGroup = this.formBuilder.group({
    username: [undefined, this.userValidators],
    password: [undefined, this.passwordValidators]
  });
  users$: Observable<Users[]> = this.loginService.getUser(this.formGroup.value.username);

  btn = {
    submit: "Login",
    register: "Register"
  }

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }


  logInUser(email: string) {
    if (this.formGroup.valid) {
      this.loginService.login(this.formGroup.value.username).subscribe(() => {
        this.router.navigate(['feed']).then();
      });
    }
  }

}
