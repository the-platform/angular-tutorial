/*
 ==== Standard ====
 = require jquery
 = require bootstrap

 ==== Angular ====
 = require angular

 ==== Angular Plugins ====
 = require lodash
 = require restangular
 = require angular-ui-router

 = require_self
 = require_tree ./angular/templates
 = require_tree .
 */

var APP = angular.module('Tutorial', [
  'ui.router',
  'templates',
  'restangular'
]);

APP.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'RestangularProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider, RestangularProvider) {
  RestangularProvider.setBaseUrl("/api");
  RestangularProvider.setDefaultRequestParams({format: "json"});


      $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('widgets', {
      url: "/",
      abstract: true,
      template: "<div ui-view></div>"
    })
    .state('widgets.list', {
      url: "",
      templateUrl: "widgets/index.html",
      controller: "WidgetsListController"
    })
}]);
