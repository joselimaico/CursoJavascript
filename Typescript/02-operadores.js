var arregloNumeros = [1, 2, 3, 4, 5];
//let srregloUsuarios: Array <UsuarioArreglo> = [
var arregloUsuarios = [
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
    }
];
var sumarDosNumeros = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
};
var totalEdades = function (arregloDeNumeros) {
    //su codigo aqui :V
};
var facultades = function (a) { return ['Facultad1', 'Facultad2']; }; //devuelve el arreglo
var facultadesDos = function (a, b) { return ['Facultad1', 'Facultad2']; };
var sumar = 0;
var resultadoForEach = arregloNumeros.forEach(function (valor, indice, arreglo) {
    console.log('valor', valor);
    //console.log('indice', indice)
    //console.log('arreglo', arreglo)
    sumar += valor;
    console.log(sumar);
});
var resultadoDeLaSuma = arregloNumeros.reduce(function (totalAcumulado, valorArreglo) {
    return totalAcumulado - valorArreglo;
}, 20);
var resultadoDeLasEdades = arregloUsuarios.reduce(function (totalAcumulado, valorArreglo) {
    return totalAcumulado - valorArreglo;
}, 20);
console.log('Resultado de la suma ', resultadoDeLaSuma);
