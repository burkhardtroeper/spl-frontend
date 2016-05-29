/**
 * Created by axel on 16.05.16.
 */
angular.module('services', [])
  .service('data', function() {

    var self = this;

    self.locations = [

      {
        id: 0,
        username: "burkhardt",
        shortTitle: "Bocholt",
        title: "Bocholt in NRW",
        summary: "Hello darkness my old friend",
        description: "Ive come to see with you again",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/46/Rathaus_Bocholt_am_Marktplatz.jpg",
        coord: {lat:51.8405, lng:6.6178},
        uhrzeit: moment().format('HH:mm'),
        datum: moment().format('DD.MM'),
        time: "19.1.2016, 13:41",
        camera: "Canon 5D",
        lens: "Canon 50mm 1.8",
        apperture: "2.8",
        focalLength: "50mm",
        iso: "100",
        shutterSpeed: "1/2000",
        proTip: "leave it now",
        tags: ["bocholt", "germany"],
        published: true

      },

      {

        id: 1,
        username: "burkhardt",
        shortTitle: "Jeri",
        title: "Jericoacoara",
        summary: "Nice beach in Brazil",
        description: "In Ceara, north of Brazil. Windy, but spectacular",
        imageUrl: "http://casarei.net/wp-content/uploads/2015/07/jericoacoara-travel.jpg",
        coord: {lat:-2.794262, lng:-40.515388},
        uhrzeit: moment().format('HH:mm'),
        datum: moment().format('DD.MM'),
        time: "19.1.2016, 13:41",
        camera: "Nikon D800",
        lens: "Nikkor 50mm 1.8",
        apperture: "2.8",
        focalLength: "50mm",
        iso: "100",
        shutterSpeed: "1/2000",
        proTip: "best shots at sunset on the hill nearby",
        tags: ["beach", "brazil"],
        published: true

      }

    ];

    self.user = {

      username: "Burkhardt"

    };

    self.currentLocationField = {};

    self.currentCoord = {};

    self.searchArray = [];

  });
