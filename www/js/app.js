// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('spl', ['ionic', 'spl.controllers', 'ngMap', 'services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.main', {
    url: '/main',
    views: {
      'menuContent': {
        templateUrl: 'templates/main.html',
        controller: 'main'
      }
    }
  })

  .state('app.locationinput', {
    url: '/locationinput',
    views: {
      'menuContent': {
        templateUrl: 'templates/locationinput.html',
        controller: 'locationinput'
      }
    }
    })

  .state('app.locationview', {
    url: '/locationview',
    views: {
      'menuContent': {
        templateUrl: 'templates/locationview.html',
        controller: 'locationview'
      }
    }
  })

  .state('app.searchLocation', {
    url: '/searchlocation',
    views: {
      'menuContent': {
        templateUrl: 'templates/searchlocation.html',
        controller: 'searchlocation'
      }
    }
  })

  .state('app.mylocations', {
    url: '/mylocations',
    views: {
      'menuContent': {
        templateUrl: 'templates/mylocations.html',
        controller: 'mylocations'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/main');
});
