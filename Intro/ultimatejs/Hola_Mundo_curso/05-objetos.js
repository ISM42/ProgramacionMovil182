// Los objetos son una agrupación de datos que hace sentido tenerlos juntos.

//sintaxis:    LET + NOMBRE_OBJETO = {}     // DENTRO DE LAS LLAVES COLOCAMOS LOS ATRIBUTOS (PROPIEDAD O LLAVE-VALOR) CON : (COMO UN DICCIONARIO DE PYTHON)


//Persona de TV
let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;


//CREAMOS EL OBJETO tomando en cuenta el personaje del ejemplo:

let personaje = {
    nombre: "Tanjiro",
    anime : "Demon slayer",
    edad : 16,  //es conveniente dejar la coma aunque sea nuestra última propiedad

}

console.log(personaje); //cuando se muestra el resultado, las propiedades pueden cambiar de orden ya que JS no lo respeta.

//ACCEDER A UNA PROPIEDAD:
console.log(personaje.nombre);

//forma 2 de acceder a una propiedad:
console.log(personaje['anime']);

//MODIFICAR UNA PROPIEDAD:
personaje.edad = 13;

//Forma 2 de modificar una propiedad (puede ser últil cuando no se conoce el nombre de la propiedad o se requiere iterar sobre todas las propiedades)
let llave = 'edad';
personaje['llave'] =16;

//o
personaje['edad'] = 13;

//ELIMINAR UNA PROPIEDAD
delete personaje.anime;