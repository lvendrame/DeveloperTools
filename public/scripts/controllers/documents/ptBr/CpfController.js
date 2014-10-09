var CpfController = function(ng, $cpf){
    ng.type = false;
    ng.quantity = 15;
    ng.withMask = true;

    var generateCpf = function(){
        return ng.withMask? $cpf.generateWithMask() : $cpf.generate();
    };

    ng.Generate = function(){
        if(ng.type){
            var list = [];
            for(var i=0;i<ng.quantity;i++){
                list.push(generateCpf());
            }
            ng.list = list.join("\r\n");
        }else{
            ng.single = generateCpf();
        }
    };
};

CpfController.$inject = ['$scope', '$cpf'];
