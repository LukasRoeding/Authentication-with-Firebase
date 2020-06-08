import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoggedInGuard} from 'ngx-auth-firebaseui';
import { SecretComponent } from './secret/secret.component';
import { HomeComponent } from './home/home.component';
import { ChampionComponent } from './champion/champion.component';

//** Secret- and ChampionComponent are guarded. The HomeComponent is not guarded by the LoggedInGuard*/
const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'secret',
    component:SecretComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path:'champion',
    component:ChampionComponent,
    canActivate:[LoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
