ngApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '../includes/index.html'
      }).
      when('/brazil/documents/cpf', {
        templateUrl: '../includes/documents/ptBR/cpf.html',
        controller: 'CpfController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
