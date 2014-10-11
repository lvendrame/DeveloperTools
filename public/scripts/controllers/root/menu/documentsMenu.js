ngApp.factory('documentsMenu', [function(){

    return {
        name:'Documents',
        children:[
            {
                name:'Brazil',
                url:'#/documents/brazil',
                sideMenu:[
                    {
                        name:'CPF',
                        url:'#/documents/brazil/cpf'
                    },
                    {
                        name:'CNPJ',
                        url:'#/documents/brazil/cnpj'
                    }
                ]
            },
            {
                name:'USA',
                url:'#/documents/usa'
            }
        ]
    };

}]);
