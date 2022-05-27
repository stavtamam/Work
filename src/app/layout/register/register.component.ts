import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {

formGroup = this.formBuilder.group({
  startDate:[]
})

  title = 'Regi';


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
