app.controller('MainController', ['$scope', 'marvel', function($scope, marvel) { 
   marvel.success(function(data) { 
      $scope.marvel = data; 
    });
}]);