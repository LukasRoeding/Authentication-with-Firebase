import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { SecretComponent } from './secret/secret.component';

@NgModule({
  declarations: [
    AppComponent,
    SecretComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxAuthFirebaseUIModule.forRoot({
      apiKey: "AIzaSyDYFB9PlV_duFuHPEZa6PFoD5QEE0p2HYU",
      authDomain: "login9001-ccffc.firebaseapp.com",
      databaseURL: "https://login9001-ccffc.firebaseio.com",
      projectId: "login9001-ccffc",
      storageBucket: "login9001-ccffc.appspot.com",
      messagingSenderId: "1060394146370",
  }
  ,() => 'your_app_name_factory',{
                  enableFirestoreSync: true, // enable/disable autosync users with firestore
                  toastMessageOnAuthSuccess: false, // whether to open/show a snackbar message on auth success - default : true
                  toastMessageOnAuthError: false, // whether to open/show a snackbar message on auth error - default : true
                  authGuardFallbackURL: '/loggedout', // url for unauthenticated users - to use in combination with canActivate feature on a route
                  authGuardLoggedInURL: '/loggedin', // url for authenticated users - to use in combination with canActivate feature on a route
                  passwordMaxLength: 60, // `min/max` input parameters in components should be within this range.
                  passwordMinLength: 8, // Password length min/max in forms independently of each componenet min/max.
                  // Same as password but for the name
                  nameMaxLength: 50,
                  nameMinLength: 2,
                  // If set, sign-in/up form is not available until email has been verified.
                  // Plus protected routes are still protected even though user is connected.
                  guardProtectedRoutesUntilEmailIsVerified: true,
                  enableEmailVerification: true, // default: true
                }),MatPasswordStrengthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
