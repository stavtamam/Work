import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatMenuModule} from "@angular/material/menu";
import { NotFoundComponent } from './not-found/not-found.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {AppStore} from "./app.store";
import {HttpClientModule} from "@angular/common/http";
import {FeedModule} from "./layout/feed/feed.module";
import {BookNowModule} from "./layout/book-now/book-now.module";
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NotFoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    FeedModule,
    BookNowModule
  ],
  providers: [AppStore, CookieService],

  bootstrap: [AppComponent]
})
export class AppModule { }
