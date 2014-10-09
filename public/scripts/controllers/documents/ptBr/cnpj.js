ngApp.factory('$cnpj', ['$docUtil', function($docUtil){
    return{
        getChecksum: function(cnpjNumber){
            cnpjNumber = cnpjNumber.replace(/\D/gi, "");
            var checksumParts = [0,0];
            for(var i=0, fac = 6;i<12;i++){
                var value = parseInt(cnpjNumber[i]);
                checksumParts[1] += value * fac;
                fac--;
                if(fac<2){fac=9;}
                checksumParts[0] += value * fac;
            }

            checksumParts[0] = $docUtil.calcMod11(checksumParts[0]);
            checksumParts[1] += checksumParts[0] * 2;
            checksumParts[1] = $docUtil.calcMod11(checksumParts[1]);
            return checksumParts.join("");
        },

        validate: function(cnpjNumber){
            cnpjNumber += "";
            cnpjNumber = cnpjNumber.replace(/\D/gi, "");
            if(cnpjNumber.length !== 14){
                return false;
            }

            if(/(^1{14}$)/.test(cnpjNumber)||
               /(^2{14}$)/.test(cnpjNumber)||
               /(^3{14}$)/.test(cnpjNumber)||
               /(^4{14}$)/.test(cnpjNumber)||
               /(^5{14}$)/.test(cnpjNumber)||
               /(^6{14}$)/.test(cnpjNumber)||
               /(^7{14}$)/.test(cnpjNumber)||
               /(^8{14}$)/.test(cnpjNumber)||
               /(^9{14}$)/.test(cnpjNumber)||
               /(^0{14}$)/.test(cnpjNumber)){
                return false;
            }

            return cnpjNumber.slice(-2) === this.getChecksum(cnpjNumber);
        },

        generate: function(){
            var cnpjNumber = "";
            for(var i=0;i<8;i++){
                cnpjNumber += Math.floor(Math.random()*10);
            }
            cnpjNumber += "0001";
            return cnpjNumber + this.getChecksum(cnpjNumber);
        },

        generateWithMask: function(){
            return this.generate().replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"$1.$2.$3/$4-$5");
        }
    }
}]);
