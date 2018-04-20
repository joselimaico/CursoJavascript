let segundoNombre = 'Francisco'

const cedula = '1722466263'

segundoNombre = 'Vicente'

//cedula = '55566465465' //Da error read only

const URL_POLI = 'http://www.epn.edu.ec'

//segundoNombre = 123 // Duck Typing

let nombre :any= 'jose'



let nombrre: String
let edad : Number = 48;
let fecha: Date = new Date()
let casado : boolean = false
//let mascotas:object = {}

class Usuario {

    public mNombre:String
    private mEdad: Number
    protected mCedula:String
    constructor(nombre:String,
                edad: Number,
                cedula:String){
        this.mNombre=nombre
        this.mEdad = edad
        this.mCedula = cedula
    }

    public imprimirEnConsola(){
        //Template Strings
        console.log(`El usuario se llama ${this.mNombre} la cédula del usuario es 
        ${this.mCedula}, la edad del usuario es ${this.mEdad}`)


    }


}

let usuario: Usuario = new Usuario('Jose',22,'1722466263')

console.log(usuario)