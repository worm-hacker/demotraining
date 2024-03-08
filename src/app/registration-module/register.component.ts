import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm:FormGroup = new FormGroup({
    email: new FormControl(''),
    fullnae: new FormControl(''),
    gender: new FormControl(''),
    address: new FormControl('')
  });

  submitForm(){

  }
}
