import { Injectable } from '@angular/core';
import {ReplaySubject} from "rxjs";
import {Appointment} from "../layout/book-now/appointments.interface";

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  constructor() { }

  private appointment$ = new ReplaySubject<string | null>(1);


  setAnAppointment(appointment: string){
    this.appointment$.next(appointment)
  }
}
