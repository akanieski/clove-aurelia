import {inject} from 'aurelia-framework';
import {AuthService} from 'spoonx/aurelia-auth';

// Using Aurelia's dependency injection, we inject the AuthService
// with the @inject decorator
@inject(AuthService)
export class Signup {

  heading = 'Sign Up';

  // These view models will be given values
  // from the signup form user input
  email = '';
  password = '';
  password2 = '';
  firstName = '';
  lastName = '';
  username = '';

  // Any signup errors will be reported by
  // giving this view model a value in the
  // catch block within the signup method
  signupError = '';

  constructor(auth) {
    this.auth = auth;
  };

  signup() {

    // Object to hold the view model values passed into the signup method
    var userInfo = { 
        email: this.email, 
        password: this.password, 
        password2: this.password2, 
        firstName: this.firstName, 
        lastName: this.lastName , 
        username: this.username 
    }

    return this.auth.signup(userInfo)
    .then((response) => {
      console.log("Signed Up!");
    })
    .catch(error => {
      this.signupError = error.response;
    });

  };
}