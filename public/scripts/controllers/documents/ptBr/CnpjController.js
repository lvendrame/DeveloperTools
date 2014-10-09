var CnpjController = function(ng, $cnpj){
    ng.type = false;
    ng.quantity = 15;
    ng.withMask = true;

    var generateCnpj = function(){
        return ng.withMask? $cnpj.generateWithMask() : $cnpj.generate();
    };

    ng.Generate = function(){
        if(ng.type){
            var list = [];
            for(var i=0;i<ng.quantity;i++){
                list.push(generateCnpj());
            }
            ng.list = list.join("\r\n");
        }else{
            ng.single = generateCnpj();
        }
    };
};

CnpjController.$inject = ['$scope', '$cnpj'];
