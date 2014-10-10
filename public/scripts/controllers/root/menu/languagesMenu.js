ngApp.factory('languagesMenu', [function(){

    return {
        name:'Languages',
        children:[
            {
                name:'JavaScript',
                url:'#/Languages/JavaScript'
            },
            {
                name:'C#',
                url:'#/Languages/CSharp'
            }
        ]
    };

}]);
