ngApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '../includes/index.html'
      }).
      when('/about', {
        templateUrl: '../includes/about.html'
      }).
      when('/who', {
        templateUrl: '../includes/who.html'
      }).
      when('/documents/brazil', {
        templateUrl: '../includes/documents/brazil.html'
      }).
      when('/documents/usa', {
        templateUrl: '../includes/documents/usa.html'
      }).
      when('/documents/brazil/cpf', {
        templateUrl: '../includes/documents/ptBR/cpf.html',
        controller: 'CpfController'
      }).
      when('/documents/brazil/cnpj', {
        templateUrl: '../includes/documents/ptBR/cnpj.html',
        controller: 'CnpjController'
      }).
      when('/languages/csharp', {
        templateUrl: '../includes/languages/csharp.html'
      }).
      when('/languages/javascript', {
        templateUrl: '../includes/languages/javascript.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
