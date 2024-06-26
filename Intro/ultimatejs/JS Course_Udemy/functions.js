/*
					                                    FUNCTION DECLARATIONS

Functions are a piece of code that we can reuse over and over again in our code.*/

/*Syntax:
function NAME() {
  CODE; //BODY
}

NAME(); //how we call or invoke the function*/

/*Usually when we write functions we also pass data into a function and additionally, a function can also return data as well which means to give us data back that we can then use for something else in the program.

PARAMETERS are like variables that are specific only to this function and they will get defined once we call the function.
			Parameters are placeholders to receive input values.

The BODY of a function is a block of code that we want to reuse. Processes the function's input data.

The RETURN statement is used to output a value from the function and terminate execution.
	
	Ej: */

function fruitProcessor(apples, oranges) {
  //estos parámetros tendrán valores numéricos
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

fruitProcessor(5, 0); //aquí definimos los valores de los parámetros. Es lo único que recibimos como salida (5 y 0). Para ver el resultado de JUICE (lo que retorna esta función) tenemos dos opciones:

console.log(fruitProcessor(5, 0)); // vemos el valor de JUICE directamente

//O

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); //guardamos lo que retorna nuestra función en una nueva variable y después la loggeamos para imprimir su resultado.

/*Thanks to the power of the function we can reuse the function with different input values and the get a different output.

	Ej: now we create a new variable where we store the new result:*/

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

/*We can see the functions as a machine.

Not all functions need to return something and not all funtions need to accept parameters.
*/

// 										    			FUNCTION EXPRESSIONS

//Essentially a function VALUE stored in a variable

/*We write them just the same way as we we declare functions. The difference is that the variable will be actually the function and the 
function does not have a name (it's an anonymous function).

This lines are an expression and an expression produces a value.

				Ej:
*/ const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
// To call a function expression we do it in the same way:
const age2 = calcAge2(1991);
console.log(age2);

//another difference between function declarations and function expressions, is that we can call the function declarations before they
//are defined in the code.

//Ej:
const age1 = calcAge1(1994);

function calcAge1(birthYear) {
  return 2037 - birthYear;
} //this works. If we do the same with a function expression, that does not work.
//Anyway, it's not a good idea to call a function before it is created in many cases.

//It is a personal preference which type of function is better to use.

//NOTE: THE RETURN STATEMENT IMMEDIATLY EXITS THE FUNCTION. SO, EVERY LINE AFTER A "RETURN" STATEMENT WILL NOT BE EXECUTED.

//-----------------------------------------------------------------------------------------------------------------------------

// EXAMPLE: CALCULATING MAX AND MIN IN A ARRAY

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0]; //asumimos que le primer elemento es el valor máximo antes de empezar a iterar sobre el arreglo
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue; //ignorando si existen errores en la lectura de las temperaturas guardadas en el arreglo con el sensor

    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};

//calcTempAmplitude([3, 7, 4, 23]);

const amplitude = calcTempAmplitude(temperatures);
//calcTempAmplitude(temperatures);
console.log(amplitude);

//what if we need to use 2 arrays to calculate the amplitude? We need to merge both arrays, so we can use the same function only once

//can go to Mozilla Developer Docs to see the methods that can be used in arrays. In this case we need CONCAT

//Example CONCAT:

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];

const array3 = array1.concat(array2);
console.log(array3);

//we pass both array in a new function like this:

const calcTempAmplitudNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0]; //asumimos que le primer elemento es el valor máximo antes de empezar a iterar sobre el arreglo
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue; //ignorando si existen errores en la lectura de las temperaturas guardadas en el arreglo con el sensor

    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
