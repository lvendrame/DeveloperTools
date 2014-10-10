ngApp.factory('documentsMenu', [function(){

    return {
        name:'Documents',
        children:[
            {
                name:'Brazil',
                url:'#/Documents/Brazil'
            },
            {
                name:'USA',
                url:'#/Documents/USA'
            }
        ]
    };

}]);
