import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MatFormFieldAppearance} from "@angular/material/form-field";
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ValidatorFn} from "@angular/forms";
import {Subject, takeUntil} from "rxjs";
import {CARDS} from "../../../../../src/app/mock/card.mock";

@Component({
  selector: 'dog-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SelectInputComponent
    }
  ]
})
export class SelectInputComponent implements OnInit, ControlValueAccessor, OnDestroy {
  options = [...CARDS];
  onDestroy$ = new Subject<void>();
  formControl = new FormControl();

  selectedValue!: string;
  @Input() appearance: MatFormFieldAppearance = 'outline';
  @Input() label!:string;
  @Input() hint!:string;
  @Input() placeholder!: string;
  @Input() validators: ValidatorFn[] = []
  @Input() name!: string;
  onChange = (value: any) => {};


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

  private registerFormChanges(){
    this.formControl.valueChanges.pipe(
      takeUntil(this.onDestroy$)
    ).subscribe(value => this.onChange(value));
  }

  private setValidators() {
    if (this.validators?.length) this.formControl.setValidators(this.validators);
  }


  writeValue(obj: any): void {
    this.formControl.setValue(obj)
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

}
