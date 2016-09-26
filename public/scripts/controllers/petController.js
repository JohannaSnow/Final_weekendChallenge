myApp.controller("petController", ["$scope", function($scope){
  console.log("meow");
}]);

$scope.addNewPet = function(){
var newPet = {
  pet_name:$scope.petName,
  animal:$scope.animalType,
  age:$scope.petAge,
  petPicURL:$scope.petPic
};//end newPet object

$http ({
  method: 'POST',
  url: '/savePet',
  data: newPet
}).then(function(response){
  console.log(response,'from server');

});//end then function
};//end addNewPet function
}]);//end add pet controller
