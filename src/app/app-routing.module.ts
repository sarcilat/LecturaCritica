import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DentroPruebaComponent } from './dentro-prueba/dentro-prueba.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dentro-prueba', component: DentroPruebaComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
