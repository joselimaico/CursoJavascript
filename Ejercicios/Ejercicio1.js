
function validarNumeroDeStringsEnArreglo(arreglo){
    //variable que almacena el numero total de strings en un arreglo
    var cont =0
    for (var i = 0 ; i < arreglo.length; i++){
        //si el tipo de dato en la posición i del arreglo es string se aunmenta uno a la variable cont
        if(typeof (arreglo[i])=='string'){
            cont++

        }
    }
    //se devuelve la variable cont
    return cont

}


var arreglo=[1,2,3,"Jose","Francisco",'string']

console.log(arreglo)

console.log('El número total de strings contenidos en el arreglo es: ',validarNumeroDeStringsEnArreglo(arreglo))