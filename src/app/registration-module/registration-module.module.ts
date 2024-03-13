import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser'; 
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { RegistrationServiceService } from './registration.service.service';
import { HttpClientModule } from '@angular/common/http'; 


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatRadioModule,HttpClientModule
  ],
  providers:[RegistrationServiceService]
})
export class RegistrationModuleModule { }
