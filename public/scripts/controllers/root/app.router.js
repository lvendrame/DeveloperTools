ngApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '../includes/index.html'
      }).
      when('/brazil/documents/cpf', {
        templateUrl: '../includes/documents/ptBR/cpf.html',
        controller: 'CpfController'
      }).
      when('/brazil/documents/cnpj', {
        templateUrl: '../includes/documents/ptBR/cnpj.html',
        controller: 'CnpjController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
