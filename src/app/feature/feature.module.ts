import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {ModalModule} from 'ngx-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthGuardService} from '../services/auth-guard.service';

const featureRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuardService] }
]

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot(),
    RouterModule.forChild(featureRoutes)
  ]
})
export class FeatureModule { }
