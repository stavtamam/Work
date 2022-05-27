import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ValidatorFn} from "@angular/forms";
import {MatFormFieldAppearance} from "@angular/material/form-field";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'dog-input',
  templateUrl: './dog-input.component.html',
  styleUrls: ['./dog-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: DogInputComponent
    }
  ]
})
export class DogInputComponent implements OnInit, ControlValueAccessor, OnDestroy {
  private onDestroy$ = new Subject<void>();

  formControl = new FormControl();
  error={
    email: "please enter a valid email",
    required: "this field is required",
    minLength: "minimum length is 5 characters"
  };
  @Input() label!: string;
  @Input() hint!: string;
  @Input() name!: string;
  @Input() type= 'text';
  @Input() placeholder!: string;
  @Input() appearance: MatFormFieldAppearance = 'outline';
  @Input() validators: ValidatorFn[] = [];
  onChange = (value: any ) => {};



  constructor() { }



  ngOnInit(): void {
    this.setValidators();
    this.registerFormChanges();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }

  writeValue(obj: any): void {
    this.formControl.setValue(obj)
  }

  private registerFormChanges(){
    this.formControl.valueChanges.pipe(
      takeUntil(this.onDestroy$)
    ).subscribe(value => this.onChange(value));
  }

  private setValidators() {
    if (this.validators?.length) this.formControl.setValidators(this.validators);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

}
