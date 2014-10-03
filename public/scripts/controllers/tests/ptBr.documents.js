var PtBrDocumentsController = function(ng, $cpf, $cnpj){

    console.log($cpf.validate(48116285190));
    console.log($cpf.validate(48116285189));

    console.log($cnpj.validate('11.444.777/0001-61'));
    console.log($cnpj.validate('11.444.777/0001-59'));
    /*describe('PtBrDocumentsControllerTest', function(){

        it('Verificar um CPF válido!', function() {
          expect($cpf.validate(48116285190)).toBe(true);
        });

        it('Verificar um CPF inválido!', function() {
          expect($cpf.validate(48116285189)).toBe(true);
        });

    });*/
};

PtBrDocumentsController.$inject = ['$scope', '$cpf', '$cnpj'];
