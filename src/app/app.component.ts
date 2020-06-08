import { Component } from '@angular/core';
import {AuthProvider} from 'ngx-auth-firebaseui';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  auth:boolean=false;
  title = 'login';
  providers = AuthProvider;
  //** auth is used to make the loginwindow disappear / the header to appear after a successfull login. */
      printUser() {
       this.auth=!this.auth;
       console.log(this.auth);
    }
    ngOnInit() {
      this.auth=true;
    }
}
