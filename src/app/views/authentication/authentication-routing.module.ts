import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { RouterModule, Routes } from '@angular/router';

const authenticationRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(authenticationRoutes)
  ],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
