import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { ApiListingComponent } from './api-listing/api-listing.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    UserListComponent,
    ApiListingComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class DashboardModuleModule { }
