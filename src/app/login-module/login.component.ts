import { Component } from '@angular/core';
import { FormGroup, FormControl,  Validators} from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private loginService: LoginService){

  }
  submitted:boolean= false;
   loginForm:FormGroup  = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('', [Validators.required])
   });  

   submitForm(){
    this.submitted = true;
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      console.log(this.loginForm.value.username);
      console.log(this.loginForm.value.password);
      let createJson = {
        "email":this.loginForm.value.username,
        "password": this.loginForm.value.password 
      }
      this.loginService.login(createJson).subscribe((result)=>{
        console.log(result);
      })
    }
    
   }
}
