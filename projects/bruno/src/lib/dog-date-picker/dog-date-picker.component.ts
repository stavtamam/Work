import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";
import {MatFormFieldAppearance} from "@angular/material/form-field";
import {Subject, takeUntil} from "rxjs";
import * as moment from 'moment';



@Component({
  selector: 'dog-date-picker',
  templateUrl: './dog-date-picker.component.html',
  styleUrls: ['./dog-date-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: DogDatePickerComponent
    }
  ]
})
export class DogDatePickerComponent implements OnInit, ControlValueAccessor, OnDestroy {

  myForm = new FormControl();
  private onDestroy$ = new Subject<void>();

  @Input() label!:string;
  @Input() hint!: string;
  @Input() appearance: MatFormFieldAppearance = 'fill';
  onChange = (value:any) => {}
  min!: Date;
  max!: Date;

  constructor() {
    const date = moment();
      this.min = new Date(date.format('YYYY/M/D'));
    console.log()
      this.max = new Date(date.add(3,'M').format('YYYY/M/D'));

  }

  ngOnInit(): void {
    this.registerFormChanges();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    this.myForm.setValue(obj);
  }

  private registerFormChanges(){
    this.myForm.valueChanges.pipe(
      takeUntil(this.onDestroy$)
    ).subscribe(value => this.onChange(value));
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

}
