
/*
Ej: cuando tenemos un input para que el usuario ingrese su año de nacimiento. Puede recibirlo como un dato string, 
pero si queremos hacer operaciones o cálculos con él no podremos. Tendremos que convertirlo a número.
*/


//TYPE CONVERSION
const inputYear = '1991';
console.log(Number(inputYear)); //estamos convirtiendo manualmente el tipo de dato, pero el valor original en inputYear, no deja de ser un STRING
console.log(Number(inputYear)+18); //tenemos que convertir primero el tipo de dato para poder realizar la operación matemática. Si no, sólo se concatenerán los valores como una cadena.


console.log(Number('Jonas')); // nos arrojará "NaN" = Not a Number, porque no podemos convertir todos los STRING a NUMBER.

//También podemos convertir un Numero a String
console.log(String(23));


// TYPE COERCION

console.log('I am ' + 23 + 'years old'); //aquí 23 es un número que se convertirá a string automáticamente
console.log('I am ' + '23' + 'years old');  //aquí se agrega 23 directamente como un string

//NO TODOS LOS OPERADORES CAMBIAN A STRING porque son operadores que no pueden funcionar más que matemáticamente
console.log('23' - '10' -3); //en esta operación el signo -, nos convierte todos los valores a números.

console.log('23'*'2'); //sucede lo mismo en este caso, se convierte de string a number.
console.log('23'/'2'); //sucede lo mismo en este caso, se convierte de string a number.

let n = '1' + 1; // '11'
n = n - 1; // 11-1 = 10
console.log(n);