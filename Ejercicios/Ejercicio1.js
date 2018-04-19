
function validarNumeroDeStringsEnArreglo(arreglo){
    var cont =0
    for (var i = 0 ; i < arreglo.length; i++){
        if(typeof (arreglo[i])=='string'){
            cont++

        }
    }
    return cont

}


var arreglo=[1,2,3,"Jose","Francisco",'string']

console.log(arreglo)

console.log('El número total de strings contenidos en el arreglo es: ',validarNumeroDeStringsEnArreglo(arreglo))