var nombre = "28"

var edad = 28

var fecha = new Date();

var casado = false

var casa = undefined

var carro = null

var arreglo = []
console.log(casa ? "Verdadero casa" : "Falso casa")

console.log(arreglo ? "Verdadero" : "Falso")
if (nombre === edad) {
    console.log("Verdadero")
}
else {
    console.log("Falso")
}

console.log(-1 ? "Verdadero" : "Falso")
console.log(0 ? "Verdadero" : "Falso")
console.log(1 ? "Verdadero" : "Falso")

console.log(fecha)
var sumarDosNumerosVDos = function amigo(numeroUno, numeroDos) {
    return numeroUno + numeroDos
}

var usuario = {
    "nombre": "Jose",
    apellido: "Limaico",
    cedula: '1722466263',//buena practica usar comillas simples,

    imprimirEnConsola: sumarDosNumeros
}


function sumarDosNumeros(numeroUno, numeroDos) {
    return numeroUno + numeroDos
}

console.log(sumarDosNumeros(1, 2))


console.log("Usuario: ", usuario)


console.log(sumarDosNumerosVDos(3, 4))

console.log(usuario.imprimirEnConsola(11, 12))

console.log(usuario.imprimirEnConsola)

var arregloDeNumeros = [1, 2, 3.5, 'Jose', true, usuario, null, fecha, sumarDosNumeros(1, 5)]
console.log(arregloDeNumeros)

for (var i = 0; i < 10; i++) {
    console.log('Aux: ', i)
}

