console.log('js sourced');

var myApp = angular.module('myApp', ['ngRoute']);

myApp.controller('petsHome',['$scope',function($scope){
  console.log('NG');

}]);


myApp.config(['$routeProvider',function ($routeProvider){
    $routeProvider.
    when ('/home',{
      templateUrl: "partials/home.html",
      controller: "homeController"
    }).
    when ("/PetController",
      {templateUrl: "partials/addPet.html",
      controller: "PetController"
    }).
    when ("/viewAllPets",
      {templateUrl: "partials/viewAllPets.html",
      controller: "allPetsController"
    }).
    otherwise({

      redirectTo: "/home"
    });
  }]);
