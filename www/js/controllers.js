angular.module('spl.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state, data) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.loggedin = false;
  $scope.loginTemplate = 'templates/login.html';

  $scope.username = data.user.username || "";

  $scope.loggedinBtnPressed = function () {

    $scope.modal.show();

  };

  $scope.login = function () {

    $scope.closeModal();
    $scope.loggedIn = true;

  };

  $scope.logout = function () {

    $scope.closeModal();
    $scope.loggedIn = false;

  };

  $scope.showMyLocations = function () {

    $scope.closeModal();
    $state.go('app.mylocations');

  };

  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeModal = function() {
    $scope.modal.hide();
  };

})

.controller('main', function($scope, $state, NgMap, data, $ionicPopup) {

  var vm = this;
  NgMap.getMap().then(function(map) {
    vm.map = map;
  });

  $scope.locations = data.locations;

  $scope.placeMarker = function(e) {

    if (!$scope.loggedIn) return;

    var ll = e.latLng;

    data.currentCoord = {lat:ll.lat(), lng: ll.lng()};

    $state.go('app.locationinput');

  };

  $scope.markerClicked = function (event) {

    data.currentLocationField = data.locations[this.data];

    $state.go('app.locationview');

  };

  $scope.showSearchPopup = function() {
    $scope.searchTemp = {};

    var myPopup = $ionicPopup.show({
      template: '<input class="padding" type="text" ng-model="searchTemp.input">',
      title: 'Enter search keywords',
      subTitle: 'Separate keywords by ","',
      scope: $scope,
      buttons: [
        { text: 'Cancel'
        },
        {
          text: '<b>Search</b>',
          type: 'button-stable',
          onTap: function(e) {
            if (!$scope.searchTemp.input) {

              e.preventDefault();

            } else {

              return $scope.searchTemp.input;

            }
          }
        }
      ]
    });

    myPopup.then(function(res) {

      if (res) {

        data.searchArray = res.split(",");

        _.each(data.searchArray, function (value, key, obj) {

          obj[key] = value.trim();

        });

        $state.go('app.searchLocation');

      }

    });

  };

})

.controller('locationinput', function($scope, data, $state) {

  $scope.location = {

    username: data.user.username,
    shortTitle: "",
    title: "",
    summary: "",
    description: "",
    imageUrl: "",
    coord: data.currentCoord,
    uhrzeit: moment().format('HH:mm'),
    datum: moment().format('DD.MM'),
    camera: "",
    lens: "",
    apperture: "",
    focalLength: "",
    iso: "",
    shutterSpeed: "",
    proTip: "",
    tempTag: "",
    tags: [],
    published: false

  };

  $scope.saveTag = function () {

    $scope.location.tags.push($scope.location.tempTag);

  };

  $scope.saveLocation = function () {

    data.locations.push($scope.location);
    $state.go('app.main');

  }

})

.controller('locationview', function($scope, data) {

  $scope.location = data.currentLocationField;

})

.controller('searchlocation', function($scope, data, $state) {

  $scope.searchResults = _.filter(data.locations, function(items){

    var locationFound = false;

    _.each(_.values(items), function (item) {

      _.each(data.searchArray, function (searchItem) {

        try {

          if (item.indexOf(searchItem) >= 0) {

            locationFound = true

          }

        } catch (e) {}

      });

    });

    if (locationFound) return items;

  });

  $scope.selectLocation = function (location) {

    data.currentLocationField = $scope.searchResults[location];
    $state.go('app.locationview')

  };

})

.controller('mylocations', function($scope, data, $state) {

  $scope.locations = data.locations;

  $scope.selectLocation = function (location) {

      data.currentLocationField = data.locations[location];
      $state.go('app.locationview')

  }

});
