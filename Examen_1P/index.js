/* 
Ejercicio 1:
I. Declara el siguiente arreglo:

i. numeros= [9,2,8,7,5,6,6,1,3,4,2,8,1,7,6]

II. Crea una función asíncrona que recorra el arreglo numeros y genere uno nuevo
llamado pares que contenga solo los pares de arreglo numeros
III. Imprimir los 2 arreglos como resultado
*/

const numeros = [9, 2, 8, 7, 5, 6, 6, 1, 3, 4, 2, 8, 1, 7, 6];
let pares = [];

async function nPares() {
  //const resultado = await nPares();
  for (let i = 0; i < numeros.length; i++) {
    const elemento = numeros[i];

    if (elemento % 2 === 0) {
      pares.push(elemento);
    }
  }
}

console.log("Arreglo de números pares", pares);
console.log("Arreglo original", numeros);
console.log("Prueba asincronía");
console.log(nPares());

/*
Ejercicio 2 5Pts:
I. Declara el siguiente arreglo
estudiantes = [ { name: 'Mane', age: 15 }, { name: 'Andrea', age: 22 }, { name: 'Alma', age: 19 }, {
name: 'Emma', age: 29 }, { name: 'Maria ', age: 13 },{ name: 'Luis', age: 16 },{ name: 'Yair', age: 21 },];

II. Crea una función asíncrona que recorra el arreglo estudiantes y que guarde en un
nuevo arreglo solo los nombres de los estudiantes que tienen mas de 18 años.

III. Imprimir los 2 arreglos como resultado
*/

const estudiantes = [
  { name: "Mane", age: 15 },
  { name: "Andrea", age: 22 },
  { name: "Alma", age: 19 },
  {
    name: "Emma",
    age: 29,
  },
  { name: "Maria ", age: 13 },
  { name: "Luis", age: 16 },
  { name: "Yair", age: 21 },
];

let mayoresEdad = [];

async function mEdad() {
  for (let i = 0; i < estudiantes.length; i++) {
    const estudiante = estudiantes[i];
    //console.log(estudiante);
    if (estudiante.age >= 18) {
      mayoresEdad.push(estudiante.name);
    }
  }
}

console.log("Arreglo original", estudiantes);
console.log("Arreglo de estudiantes mayores de edad", mayoresEdad);
console.log(mEdad());
