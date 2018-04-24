var arregloNumeros = [1, 2, 3, 4, 5];
var arregloDeudas = [78, 150.25, 92, 32.75, 25.89, 50.20, 11];
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
function calcularDeudaUsuario(edad) {
    return arregloDeudas.reduce(function (totalAcumulado, deuda) {
        return totalAcumulado + (((edad) / 100) * deuda);
    }, 0);
}
var usuariosConCincoAniosMenos = arregloUsuarios.map(function (usuario) {
    usuario.edad = usuario.edad - 5;
    usuario.deuda = calcularDeudaUsuario(usuario.edad);
    return usuario;
}).filter(function (usuario) {
    //true se devuelve, false no se devuelve
    return (usuario.deuda < 100);
});
var resultadoDeLasEdades = arregloUsuarios.reduce(function (totalAcumulado, valorArreglo) {
    return totalAcumulado + valorArreglo.edad;
}, 20);
console.log('Resultado de la suma ', resultadoDeLaSuma);
console.log('Resultado de la suma ', resultadoDeLasEdades);
console.log('Usuarios con cinco anios menos', usuariosConCincoAniosMenos);
