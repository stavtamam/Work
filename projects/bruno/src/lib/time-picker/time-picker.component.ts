import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ValidatorFn} from "@angular/forms";
import {Subject, takeUntil} from "rxjs";
import {MatFormFieldAppearance} from "@angular/material/form-field";

@Component({
  selector: 'dog-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TimePickerComponent
    }
  ]
})
export class TimePickerComponent implements OnInit, ControlValueAccessor,OnDestroy {
  private onDestroy$ = new Subject<void>();
  formControl = new FormControl();

  @Input() label!: string;
  @Input() hint!: string;
  @Input() name!: string;
  @Input() placeholder!: string;
  @Input() appearance: MatFormFieldAppearance = 'outline';
  @Input() validators: ValidatorFn[] = [];
  @Input() min!:string;
  @Input() max!:string;
  onChange = (value: any ) => {};
  @Input() selectedTime: any;

  constructor() { }

  ngOnInit(): void {
    this.setValidators();
    this.registerFormChanges()
  }


  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }
  private registerFormChanges(){
    this.formControl.valueChanges.pipe(
      takeUntil(this.onDestroy$)
    ).subscribe(value => this.onChange(value));
  }

  private setValidators() {
    if (this.validators?.length) this.formControl.setValidators(this.validators);
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }

  writeValue(obj: any): void {
    this.formControl.setValue(obj);
  }

  ngOnDestroy(): void {
  }

}
