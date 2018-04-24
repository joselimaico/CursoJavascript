function calcularPoblacionOsos(meses){
    var osos = 1
    for(var i = 1 ; i<= meses ; i ++ ){
        osos *= 4;
        console.log("Van a existir "+osos+" osos de anteojos después del mes: "+i)

        if (osos > 10000){
            
            osos = osos/2
            console. log("removiendo "+osos+" osos de anteojos de la población...")

            console.log("Van a existir "+osos+" osos de anteojos despúes del mes: "+ (i))

        }
    }
}


calcularPoblacionOsos(24)