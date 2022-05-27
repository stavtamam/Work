import { Injectable } from '@angular/core';
import {AppStore} from "./app.store";


@Injectable({
  providedIn: 'root'
})

export class AppService {
  constructor(private appStore: AppStore) {}

  updateUserName(newName: string) {
    this.appStore.update({ name: newName });
  }
}
