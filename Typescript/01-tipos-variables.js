var segundoNombre = 'Francisco';
var cedula = '1722466263';
segundoNombre = 'Vicente';
//cedula = '55566465465' //Da error read only
var URL_POLI = 'http://www.epn.edu.ec';
//segundoNombre = 123 // Duck Typing
var nombre = 'jose';
var nombrre;
var edad = 48;
var fecha = new Date();
var casado = false;
//let mascotas:object = {}
var Usuario = /** @class */ (function () {
    function Usuario(nombre, edad, cedula) {
        this.mNombre = nombre;
        this.mEdad = edad;
        this.mCedula = cedula;
    }
    Usuario.prototype.imprimirEnConsola = function () {
        //Template Strings
        console.log("El usuario se llama " + this.mNombre + " la c\u00E9dula del usuario es \n        " + this.mCedula + ", la edad del usuario es " + this.mEdad);
    };
    return Usuario;
}());
var usuario = new Usuario('Jose', 22, '1722466263');
var usuarioOtro = {
    mNonmbre: 'Jose',
    mEdad: 25
};
console.log(usuario.imprimirEnConsola());
console.log(usuarioOtro);
var usuarioCuatro;
var UsuarioTres = /** @class */ (function () {
    function UsuarioTres(mNombre, mEdad, mCedula) {
        this.mNombre = mNombre;
        this.mEdad = mEdad;
        this.mCedula = mCedula;
    }
    return UsuarioTres;
}());
