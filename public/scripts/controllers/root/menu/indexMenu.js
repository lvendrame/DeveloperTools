ngApp.factory('indexMenu', [function(){

    return {
        name:'Index',
        url:'#/',
        sideMenu:[
            {
                name:'About',
                url:'#/About'
            },
            {
                name:'Who we are',
                url:'#/Who'
            }
        ]
    };

}]);
