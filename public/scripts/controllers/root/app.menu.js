ngApp.factory('rootMenu', ['indexMenu', 'documentsMenu', 'languagesMenu', function(indexMenu, documentsMenu, languagesMenu){

    return [
        indexMenu,
        documentsMenu,
        languagesMenu
    ];

}]);
