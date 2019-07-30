import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './core/form/form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SignupComponent} from './core/signup/signup.component';
import { LoginComponent } from './core/login/login.component';
import { HomeComponent } from './feature/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {CoreModule} from './core/core.module';
import {FeatureModule} from './feature/feature.module';

const appRoutes: Routes = [
  { path: 'home', loadChildren: './src/app/feature/feature.module#FeatureModule' },
  { path: 'signup', loadChildren: './src/app/core/core.module#CoreModule' },
  { path: 'login', loadChildren: './src/app/core.module#CoreModule' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FeatureModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
