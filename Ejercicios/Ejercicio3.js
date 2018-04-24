function calcularPoblacionOsos(meses){
    //la variable osos almacena la poblacion de los osos que se multiplicará por 4

    var osos = 1
    //el ciclo for empieza desde uno que es el primer mes hasta meses que es la cantidad de n meses ingresada por el usuario
    for(var i = 1 ; i<= meses ; i ++ ){
        //se multiplica a la población actual por 4
        osos *= 4;
        console.log("Van a existir "+osos+" osos de anteojos después del mes: "+i)
        //si la población de osos es mayor que 10000 se la reduce a la mitad y se realiza el calculo anterior.
        if (osos > 10000){

            osos = osos/2
            console. log("removiendo "+osos+" osos de anteojos de la población...")

            console.log("Van a existir "+osos+" osos de anteojos despúes del mes: "+ (i))

        }
    }
}


calcularPoblacionOsos(24)