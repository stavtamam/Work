import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogInputComponent } from './dog-input.component';

describe('DogInputComponent', () => {
  let component: DogInputComponent;
  let fixture: ComponentFixture<DogInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
