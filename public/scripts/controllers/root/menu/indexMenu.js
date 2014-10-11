ngApp.factory('indexMenu', [function(){

    return {
        name:'Index',
        url:'#/',
        sideMenu:[
            {
                name:'About',
                url:'#/about'
            },
            {
                name:'Who we are',
                url:'#/who'
            }
        ]
    };

}]);
