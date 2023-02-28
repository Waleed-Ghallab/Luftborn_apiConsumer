import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[                                //navigations
  {path:'',redirectTo:'employee',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'employee',component:EmployeeDetailsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
