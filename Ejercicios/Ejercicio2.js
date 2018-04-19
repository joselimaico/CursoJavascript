function encenderGenerador1(){
    var i = 1
    var energia = 62
    while(i <=4){

        console.log('Generador #'+i+' está prendido, añadiendo 62 MW para un total de ' + energia+ ' MW.')
        energia += 62
        if(i%2!==0){
            console.log('Generador #'+(i+1)+' está apagado')
        }

        i++

    }

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