import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./not-found/not-found.component";
import {AuthGuard} from "./auth.guard";
import {FeedComponent} from "./layout/feed/feed.component";


const routes: Routes = [

  {
    path:'login',
    loadChildren: () =>
      import('./layout/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'feed',
    loadChildren: () =>
         import('./layout/feed/feed.module').then((m)=> m.FeedModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'book-now',
    loadChildren: () =>
      import('./layout/book-now/book-now.module').then((m)=> m.BookNowModule),
    canActivate: [AuthGuard]
  },
  {path: '**',component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
