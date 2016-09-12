angular.module('app.routes', ['firebase'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('tabsController', {
    url: '/app',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.home', {
    url: '/Home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('newMenu', {
    url: '/addMenu',
    templateUrl: 'templates/newMenu.html',
    controller: 'newMenuCtrl'
  })

  .state('tabsController.random', {
    url: '/Random',
    views: {
      'tab3': {
        templateUrl: 'templates/random.html',
        controller: 'randomCtrl'
      }
    }
  })

  .state('tabsController.favorite', {
    url: '/Favorite',
    views: {
      'tab4': {
        templateUrl: 'templates/favorite.html',
        controller: 'favoriteCtrl'
      }
    }
  })

  .state('tabsController.bookmark', {
    url: '/Bookmark',
    views: {
      'tab2': {
        templateUrl: 'templates/bookmark.html',
        controller: 'bookmarkCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/app/Home')



});
