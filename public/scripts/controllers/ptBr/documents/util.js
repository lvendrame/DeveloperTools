ngApp.factory('$docUtil', [function(){
    return{
        calcMod11 : function(number){
            number = 11 - (number % 11);
            return (number > 9) ? 0 : number;
        }
    }
}]);
