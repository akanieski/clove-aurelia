import {AuthorizeStep} from 'spoonx/aurelia-auth';
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

// Using Aurelia's dependency injection, we inject Router
// with the @inject decorator
@inject(Router)
export default class {

  constructor(router) {
    this.router = router;
  };

  configure() {

    var appRouterConfig = function(config) {

      config.title = 'Random Quotes App';

      // Here, we hook into the authorize extensibility point
      // to add a route filter so that we can require authentication
      // on certain routes
      config.addPipelineStep('authorize', AuthorizeStep);

      // Here, we describe the routes we want along with information about them
      // such as which they are accessible at, which module they use, and whether
      // they should be placed in the navigation bar
      config.map([
          { route: ['','welcome'],  name: 'welcome',        moduleId: './welcome',              nav: true,  title:'Welcome' },
          { route: 'users',         name: 'users',          moduleId: './users',                nav: true,  title:'Users',          auth: true },
          { route: 'domainSelect',  name: 'domainSelect',   moduleId: './system/domain-select', nav: false, title:'Domain Select',  auth: true },
          { route: 'signup',        name: 'signup',         moduleId: './system/signup',        nav: false, title:'Signup',         authRoute: true },
          { route: 'login',         name: 'login',          moduleId: './system/login',         nav: false, title:'Login',          authRoute: true },
          { route: 'logout',        name: 'logout',         moduleId: './system/logout',        nav: false, title:'Logout',         authRoute: true }
        ]);
      };

    // The router is configured with what we specify in the appRouterConfig
    this.router.configure(appRouterConfig);

  };
}