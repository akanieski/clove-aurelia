import config from './system/site-config';

export function configure(aurelia) {

  // Here we provide configuration for our application and can
  // bring in the configuration settings we put within auth-config.js
  // that will tell the aureliauth plugin the specific settings
  // for our application's authentication context.
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('spoonx/aurelia-auth', (baseConfig) => {
         baseConfig.configure(config);
    });

  aurelia.start().then(a => a.setRoot());
}