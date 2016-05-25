angular.module('app').component('shell', {
  templateUrl: 'app/shell/shell.tpl.html',
  controller: function($translate) {
    this.title = 'Shell';
  }
});
