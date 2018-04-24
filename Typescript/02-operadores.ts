let arregloNumeros = [1, 2, 3, 4, 5]
//let srregloUsuarios: Array <UsuarioArreglo> = [
let arregloUsuarios: UsuarioArreglo[] = [
    {
        nombre: 'Jose',
        edad: 28
    },
    {
        nombre: 'Jose',
        edad: 10
    },
    {
        nombre: 'Francisco',
        edad: 70
    },
    {
        nombre: 'Luis',
        edad: 32
    },
    {
        nombre: 'Yoshi',
        edad: 25
    }]
let sumarDosNumeros = (numeroUno: number, numeroDos: number) => { //fat arrow function
    return numeroUno + numeroDos
}


let totalEdades = arregloDeNumeros => {
    //su codigo aqui :V
}

let facultades = a => ['Facultad1', 'Facultad2'] //devuelve el arreglo

let facultadesDos = (a: number, b?: number) => ['Facultad1', 'Facultad2']

let sumar = 0
let resultadoForEach = arregloNumeros.forEach(
    (valor, indice, arreglo) => {
        console.log('valor', valor)
        //console.log('indice', indice)
        //console.log('arreglo', arreglo)

        sumar += valor

        console.log(sumar)
    }
)

let resultadoDeLaSuma = arregloNumeros.reduce(
    (totalAcumulado, valorArreglo) => {

        return totalAcumulado - valorArreglo
    }
    ,
    20
)

let resultadoDeLasEdades = arregloUsuarios.reduce(
    (totalAcumulado, valorArreglo) => {

        return totalAcumulado - valorArreglo
    }
    ,
    20
)

interface UsuarioArreglo {
    nombre: string
    edad: number
}


console.log('Resultado de la suma ', resultadoDeLaSuma)