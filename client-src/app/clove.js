import 'twbs/bootstrap';
import 'twbs/bootstrap/css/bootstrap.css!';
import 'twbs/bootstrap/js/bootstrap.min';

import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {FetchConfig} from 'spoonx/aurelia-auth/app.fetch-httpClient.config';
import AppRouterConfig from './system/router-config';
import {AppService} from './services/appService'

// Using Aurelia's dependency injection, we inject Aurelia's router,
// the paulvanbladel/aurelia-auth http client config, and our own router config
// with the @inject decorator.
@inject(Router, FetchConfig, AppRouterConfig, AppService)
export class App {

  constructor(router, httpClientConfig, appRouterConfig, appService) {

    this.appService = appService;
    this.router = router;

    // Client configuration provided by the aureliauth plugin
    this.httpClientConfig = httpClientConfig;

    // The application's configuration, including the
    // route definitions that we've declared in router-config.js
    this.appRouterConfig = appRouterConfig;
    
  };

  activate() {

    // Here, we run the configuration when the app loads.
    this.httpClientConfig.configure();
    this.appRouterConfig.configure();

  };
}
