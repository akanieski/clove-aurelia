// client/src/login.js

import {inject} from 'aurelia-framework';
import {AuthService} from 'spoonx/aurelia-auth';
import {AppService} from '../services/appService';

// Using Aurelia's dependency injection, we inject the AuthService
// with the @inject decorator
@inject(AuthService, AppService)

export class Login {

  heading = 'Login';

  // These view models will be given values
  // from the signup form user input
  email = '';
  password = '';

  // Any signup errors will be reported by
  // giving this view model a value in the
  // catch block within the signup method
  signupError = '';

  constructor(auth, appService) {
    this.auth = auth;
    this.appService = appService;
  };

  login() {
    return this.auth.login(this.email, this.password)
    .then(response => {
        if (!this.appService.isDomainSelected) {
            window.location = "/#/domainSelect";
        }
        console.log("Login response: " + response);
    })
    .catch(response => {
        this.loginError = response.content.error;
    });
  };
}
