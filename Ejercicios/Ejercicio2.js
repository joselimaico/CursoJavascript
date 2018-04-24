function encenderGenerador1(){
    // la variable i se utiliza en el ciclo while
    var i = 1
    //el valor de la energía que generan los cuatro primeros generadores
    var energia = 62
    while(i <=4){

        console.log('Generador #'+i+' está prendido, añadiendo 62 MW para un total de ' + energia+ ' MW.')
        energia += 62
        //si el numero del generador es par o impar.
        if(i%2!==0){
            console.log('Generador #'+(i+1)+' está apagado')
        }

        i++

    }
    //los siguientes generadores se los ejecuta con un ciclo for y realizan el mismo procedimiento que los anteriores
    for(var i = 5; i<= 19;i++){
        energia-=62
        energia += 124
        console.log('Generador #'+i+' está prendido, añadiendo 124 MW para un total de ' + energia+ ' MW.')

        if(i%2!==0){
            console.log('Generador #'+(i+1)+' está apagado')
        }

    }
}

encenderGenerador1()