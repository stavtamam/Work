import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogDatePickerComponent } from './dog-date-picker.component';

describe('DogDatePickerComponent', () => {
  let component: DogDatePickerComponent;
  let fixture: ComponentFixture<DogDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogDatePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
