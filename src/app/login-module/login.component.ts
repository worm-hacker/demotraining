import { Component } from '@angular/core';
import { FormGroup, FormControl,  Validators} from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth-guard/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private loginService: LoginService, private router: Router, private authService: AuthService){

  }
  submitted:boolean= false;
   loginForm:FormGroup  = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('', [Validators.required])
   });  

   submitForm(){
    this.submitted = true;
    if(this.loginForm.valid){
      let createJson = {
        "email":this.loginForm.value.username,
        "password": this.loginForm.value.password 
      }
      this.loginService.login(createJson).subscribe((result)=>{
        if('token' in result){
          this.authService.login();
          this.router.navigateByUrl('/dashboard');
        }
      })
    }
    
   }
}
