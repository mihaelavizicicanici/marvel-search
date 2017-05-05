app.factory('marvel', ['$http', function($http) { 
  return $http.get('http://gateway.marvel.com:80/v1/public/characters?apikey=468a513f0aa44ea7eba5397858f20b5b') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);