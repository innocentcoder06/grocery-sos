import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { HttpClientModule } from '@angular/common/http';
import { SadminPageComponent } from './pages/sadmin-page/sadmin-page.component';
import { FadminPageComponent } from './pages/fadmin-page/fadmin-page.component';
import { VadminPageComponent } from './pages/vadmin-page/vadmin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninPageComponent,
    SadminPageComponent,
    FadminPageComponent,
    VadminPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
