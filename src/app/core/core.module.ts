import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {FormComponent} from './form/form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

const coreRoutes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(coreRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class CoreModule { }
