import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationServiceService } from './registration.service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  //constructor(){
  constructor( private registerService: RegistrationServiceService){

  }
    submitted:boolean= false;
    registerForm:FormGroup  = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    fullname: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),

   });  
/*
  registerForm:FormGroup = new FormGroup({
    email: new FormControl(''),
    fullnae: new FormControl(''),
    gender: new FormControl(''),
    address: new FormControl('')
  });*/

  submitForm(){
    this.submitted = true;
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
      console.log(this.registerForm.value.email);
      console.log(this.registerForm.value.password);
      console.log(this.registerForm.value.fullname);
      console.log(this.registerForm.value.gender);
      console.log(this.registerForm.value.address);

      let createJson = {
        "email":this.registerForm.value.email,
        "password":this.registerForm.value.email,
        "fullname": this.registerForm.value.fullname,
        "gender": this.registerForm.value.gender,
        "address": this.registerForm.value.address,
      }
   
      this.registerService.register(createJson).subscribe((result)=>{
        console.log(result);
      })
    
      }
    }

}
