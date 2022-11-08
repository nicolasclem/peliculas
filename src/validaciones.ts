import * as Yup from 'yup';


export default function configurarValidaciones(){
    Yup.addMethod(Yup.string,'primerLetraMayuscula', function(){
        return this.test('primer-letra-mayuscula',
        'la primer letra debe ser mayuscula', function (valor){
            if(valor && valor.length > 0){
                const primerLetra = valor.substring(0,1);
                return primerLetra === primerLetra.toUpperCase();
            }
            return true;
        })
    })

}