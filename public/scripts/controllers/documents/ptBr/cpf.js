ngApp.factory('$cpf', ['$docUtil', function($docUtil){
    return{
        getChecksum: function(cpfNumber){
            cpfNumber = cpfNumber.replace(/\D/gi, "");
            var checksumParts = [0,0];
            for(var i=0, fac = 11;i<9;i++){
                var value = parseInt(cpfNumber[i]);
                checksumParts[1] += value * fac;
                fac--;
                checksumParts[0] += value * fac;
            }

            checksumParts[0] = $docUtil.calcMod11(checksumParts[0]);
            checksumParts[1] += checksumParts[0] * 2;
            checksumParts[1] = $docUtil.calcMod11(checksumParts[1]);
            return checksumParts.join("");
        },

        validate: function(cpfNumber){
            cpfNumber += "";
            cpfNumber = cpfNumber.replace(/\D/gi, "");
            if(cpfNumber.length !== 11){
                return false;
            }

            if(/(^1{11}$)/.test(cpfNumber)||
               /(^2{11}$)/.test(cpfNumber)||
               /(^3{11}$)/.test(cpfNumber)||
               /(^4{11}$)/.test(cpfNumber)||
               /(^5{11}$)/.test(cpfNumber)||
               /(^6{11}$)/.test(cpfNumber)||
               /(^7{11}$)/.test(cpfNumber)||
               /(^8{11}$)/.test(cpfNumber)||
               /(^9{11}$)/.test(cpfNumber)||
               /(^0{11}$)/.test(cpfNumber)){
                return false;
            }

            return cpfNumber.slice(-2) === this.getChecksum(cpfNumber);
        },

        generate: function(){
            var cpfNumber = "";
            for(var i=0;i<9;i++){
                cpfNumber += Math.floor(Math.random()*10);
            }
            return cpfNumber + this.getChecksum(cpfNumber);
        },

        generateWithMask: function(){
            return this.generate().replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"$1.$2.$3-$4");
        }
    }
}]);
