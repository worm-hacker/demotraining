import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ConditionalStatementComponent } from './conditional-statement/conditional-statement.component';
import { SwitchCasesComponent } from './switch-cases/switch-cases.component';
import { NgforExampleComponent } from './ngfor-example/ngfor-example.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PipeexapleComponent } from './pipeexaple/pipeexaple.component';
import { SqrtPipe } from './sqrt.pipe';
import { ArrayToStringPipe } from './array-to-string.pipe';
import { CustomArrayPipe } from './custom-array.pipe';
import { CustomeHighlightDirective } from './custome-highlight.directive';
import { CustomeDirectiveComponent } from './custome-directive/custome-directive.component';
import { NgcontainerNgcontentComponent } from './ngcontainer-ngcontent/ngcontainer-ngcontent.component';
import { ServiceCompComponent } from './service-comp/service-comp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ConditionalStatementComponent,
    SwitchCasesComponent,
    NgforExampleComponent,
    ParentComponent,
    ChildComponent,
    PipeexapleComponent,
    SqrtPipe,
    ArrayToStringPipe,
    CustomArrayPipe,
    CustomeHighlightDirective,
    CustomeDirectiveComponent,
    NgcontainerNgcontentComponent,
    ServiceCompComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
