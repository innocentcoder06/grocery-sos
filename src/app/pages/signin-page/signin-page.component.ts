import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss']
})
export class SigninPageComponent implements OnInit {

  signin: boolean;
  signup: boolean;

  constructor() {
    this.signin = true;
  }

  ngOnInit() {
  }

  signUp() {
    this.signup = true;
    this.signin = false;
  }

  signIn() {
    this.signin = true;
    this.signup = false;
  }

}
