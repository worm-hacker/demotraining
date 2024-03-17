import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth-guard/auth.gaurd';

const routes: Routes = [
  // {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'login', loadChildren: ()=> import('./login-module/login-module.module').then(l=> l.LoginModuleModule) },
  {path: 'register', loadChildren: ()=> import('./registration-module/registration-module.module').then( r => r.RegistrationModuleModule)},
  {path: 'dashboard', loadChildren: ()=> import('./dashboard-module/dashboard-module.module').then( d=> d.DashboardModuleModule), canActivate:[AuthGuard]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
