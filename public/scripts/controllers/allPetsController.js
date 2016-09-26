myApp.controller("allPetsController", ["$scope", function($scope){
  console.log("all the pets!");
}]);

// http request to get all pets from db
  $scope.allPets=[];
  $http ({
    method: 'GET',
    url:'/viewAll'
  }).then(function(response){
    $scope.allPets = response.data;
    console.log($scope.allPets);
  });

}]);//end AllPetsController
