import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './core/form/form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SignupComponent} from './core/signup/signup.component';
import { LoginComponent } from './core/login/login.component';
import { HomeComponent } from './feature/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {CoreModule} from './core/core.module';
import {FeatureModule} from './feature/feature.module';
import {AuthInterceptors} from './auth-interceptors';
import {AuthGuardService} from './services/auth-guard.service';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: './feature/feature.module#FeatureModule', canActivate: [AuthGuardService] },
  { path: 'signup', loadChildren: './core/core.module#CoreModule' },
  { path: 'login', loadChildren: './core/core.module#CoreModule' }
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptors,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
