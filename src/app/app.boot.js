angular.module('app', [
    'ngRoute', 'ngSanitize', 'ngAnimate', 'ngCookies', 'ngResource', 'ngTouch',
    'templates-app',
    'templates-common',
    'pascalprecht.translate',
    'ui.bootstrap'
  ])
  .controller('ApplicationController', function() {
    this.pageTitle = 'AngularBoilerplate';
  });
