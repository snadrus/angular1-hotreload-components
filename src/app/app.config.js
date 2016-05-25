angular.module('app')
  .config(function($routeProvider, $httpProvider, $translateProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);

    $routeProvider
      .when("/main", {template:"<main></main>"})
      .when("/filter", {template: "<filter></filter>"})
      .when("/station", {template: "<station></station>"})
      .when("/chart", {template: "<chart></chart>"})
      .when("/org", {template: "<org></org>"})
      .otherwise("/main");

    $translateProvider.registerAvailableLanguageKeys(['de_DE', 'en_EN'], {
      'de_*': 'de_DE',
      'en_*': 'en_EN'
    });
    $translateProvider.useStaticFilesLoader({
      prefix: 'assets/locale/locale-',
      suffix: '.json'
    });

    $translateProvider.use('en_EN');
    $translateProvider.useSanitizeValueStrategy('sanitize');
  });
