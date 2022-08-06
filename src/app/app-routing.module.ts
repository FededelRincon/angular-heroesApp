import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'auth',
    // component: 
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
    // loadChildren: () => import('./auth/auth-routing.module').then( m => m.AuthRoutingModule )  //si lo hiciera con otro modulo intermedio...
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then( m => m.HeroesModule )
  },
  {
    path: '404',
    component: ErrorPageComponent,
    // pathMatch: 'full',
  },
  {
    path: '**',
    // component: ErrorPageComponent,
    redirectTo: '404'
  },
]


@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
