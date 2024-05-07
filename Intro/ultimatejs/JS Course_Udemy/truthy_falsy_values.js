/*
Falsy values are values that are not exactly false but will become false when we try to convert them into a boolean. 
Everything else are our so-called truthy values. Values that will be converted to true. For example any numer that is not zero or any
string that is not an empty string will be converted to true when we attempt to convert them to a boolean.

In JS, there are only five falsy values: 0, '', undefined, null, NaN.

En la práctica la conversión a boolean es implícita, no explícita.
*/

console.log(Boolean(0));  //false
console.log(Boolean('Jonas')); //true
console.log(Boolean(undefined)); //false
console.log(Boolean({})); //empty object = true


//Ejemplo de coercion con boolean

const money = 0;
if (money){
    console.log("Don't spend it all ;)");
}else{
    console.log("You should get a job!"); //salida
}

//ejemplo 2

let height;

if(height){
    console.log('YAY! Height is defined');
}else{
    console.log('Height is UNDEFINED!'); //salida
}