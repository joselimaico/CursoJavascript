let arregloNumeros = [1, 2, 3, 4, 5]

let arregloDeudas = [78,150.25,92,32.75,25.89,50.20,11]
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

function calcularDeudaUsuario(edad: number){
    return arregloDeudas.reduce(
        (totalAcumulado,deuda:number)=>{
            return totalAcumulado +( ((edad)/100)*deuda)
        },
        0
    )

}

let usuariosConCincoAniosMenos = arregloUsuarios.map(
    (usuario:UsuarioArreglo)=>{
        usuario.edad = usuario.edad-5
        usuario.deuda=calcularDeudaUsuario(usuario.edad)
        return usuario
    },

).filter(
    (usuario:UsuarioArreglo)=>{
        //true se devuelve, false no se devuelve
        return (usuario.deuda < 100)
    }
)
    /*.every(
        (usuario: UsuarioArreglo) =>{
            return (usuario.edad > 80)
        }
    )*/
    .some( //OR
        (usuario: UsuarioArreglo) =>{
            return (usuario.edad <= 18)
        }
    )



let resultadoDeLasEdades = arregloUsuarios.reduce(
    (totalAcumulado, valorArreglo:UsuarioArreglo) => {

        return totalAcumulado + valorArreglo.edad
    }
    ,
    20
)

interface UsuarioArreglo {
    nombre: string
    edad: number
    deuda?:number
}


console.log('Resultado de la suma ', resultadoDeLaSuma)
console.log('Resultado de la suma ', resultadoDeLasEdades)

console.log('Usuarios con cinco anios menos', usuariosConCincoAniosMenos)

