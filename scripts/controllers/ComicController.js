app.controller('ComicController', ['$scope', 'marvel', '$routeParams', function($scope, marvel, $routeParams) {
  marvel.success(function(data) {
    $scope.detail = data.data.results[$routeParams.id];
  });
}]);