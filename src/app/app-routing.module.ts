import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { FadminPageComponent } from './pages/fadmin-page/fadmin-page.component';
import { SadminPageComponent } from './pages/sadmin-page/sadmin-page.component';
import { VadminPageComponent } from './pages/vadmin-page/vadmin-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'sadmin', pathMatch: 'full' },
  { path: 'fadmin', component: FadminPageComponent },
  { path: 'sadmin', component: SadminPageComponent },
  { path: 'vadmin', component: VadminPageComponent },
  { path: 'signin', component: SigninPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
