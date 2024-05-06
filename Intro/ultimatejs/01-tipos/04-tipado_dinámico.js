let numero = 43;
let texto = "Hola Mundo";
let verdadero = true;

let undef;
let nula = null;

console.log(typeof numero);
console.log(typeof nombre);
console.log(typeof verdadero);
console.log(typeof undef);
console.log(typeof nula);

//El typeof nos va a devolver el tipo de dato que estamos utilizando
//El null devolverá un tipo de dato "object" aunque debería ser "null" ya que el paradigma propone que usualmente se usa este tipo de dato
//para una lista de objetos. Al no ser seleccionado ninguno se usa NULL. Por eso se considera object cuando se regresa con typeof