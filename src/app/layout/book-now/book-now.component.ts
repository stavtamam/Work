import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {map, Observable} from "rxjs";
import {Users} from "../login/login.interface";
import {LoginService} from "../login/login.service";
import {CookieService} from "ngx-cookie-service";
import * as moment from 'moment';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.scss']
})
export class BookNowComponent implements OnInit {
  allValidators = [Validators.required];
  emailValidators = [Validators.required, Validators.email];
 myForm: FormGroup = this.formBuilder.group({
   datePick: [''],
   username: [this.cookieService.get('username') ,this.allValidators],
   email: [this.cookieService.get('userEmail'), this.emailValidators],
   time: ['',this.allValidators],
   select: ['', this.allValidators]

 });
  users$: Observable<Users[]> = this.loginService.getUser(this.cookieService.get('userEmail'));


  header = "book your dogs' appointment";
  btn = {
    submit: "Book"
  }

    constructor(
      private formBuilder: FormBuilder,
      private loginService: LoginService,
      private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(
      "name:",this.myForm.value.username,
      "email:", this.myForm.value.email,
      "select:", this.myForm.value.select.name,
      "date:", this.myForm.value.datePick,
      "time:", this.myForm.value.time
    );


  }

}
