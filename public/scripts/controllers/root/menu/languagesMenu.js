ngApp.factory('languagesMenu', [function(){

    return {
        name:'Languages',
        children:[
            {
                name:'JavaScript',
                url:'#/languages/javascript',
                sideMenu:[
                    {
                        name:'Generator',
                        url:'#/languages/javascript/generator'
                    }
                ]
            },
            {
                name:'C#',
                url:'#/languages/csharp'
            }
        ]
    };

}]);
