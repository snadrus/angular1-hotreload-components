angular.module('app').component('main', {
  templateUrl: 'app/main/main.tpl.html',
  controller: function($translate) {
    this.title = 'Main';

    this.toggleLang = function() {
      if ($translate.use() === 'en_EN') {
        $translate.use('de_DE');
      } else {
        $translate.use('en_EN');
      }
    };
  }
});
