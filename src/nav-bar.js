import {bindable} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {AppService} from './appService';

@inject(AppService)
export class NavBar {
  // User isn't authenticated by default
  _isAuthenticated = false;
  @bindable router = null;

  constructor(appService) {
    this.appService = appService;
  };
  
}