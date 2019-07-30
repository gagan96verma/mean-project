import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HttpClientModule} from '@angular/common/http';

const featureRoutes: Routes = [
  {path: '', component: HomeComponent}
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(featureRoutes)
  ]
})
export class FeatureModule { }
