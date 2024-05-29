//console.log("Hola mundo");

/*function suma(a, b) {
  return a + b;
}

//funcion fatArrow
const suma2 = (a, b) => {
  return a + b;
};

// fatArrow simplificada
const suma3 = (a, b) => a + b;

console.log(suma3(5, 2));

//OBJETOS

const usuario = {
  nombre: "ivan",
  apellidoP: "guerra",
  edad: 36,

  direccion: {
    pais: "Mexico",
    ciudad: "Qro",
    calle: "la misma 123",
  },

  amigos: ["Alex", "Carlos"],

  estatus: true,
  enviaCorreo: (enviarCorr = () => "enviando..."),
};

console.log(usuario);
console.log(usuario.amigos);

console.log(usuario.enviaCorreo());

//TRABAJO CON EL DOM

const titulo = document.createElement("h1");
titulo.innerText = "Soy un título creado con JS";
document.body.append(titulo);

const boton = document.createElement("button");
boton.innerText = "Presióname";
document.body.append(boton);

//eventos
boton.addEventListener("click", function () {
  //console.log("Evento click ejecutado");
  titulo.innerText = "Evento click ejecutado";
  alert("Éxito");
});

//TRABAJO CON ARREGLOS

const nombres = ["Alan", "Isa", "Pablo", "Juan Luis"];

/*for (let i = 0; i < nombres.length; i++) {
  const elemento = nombres[i];
  console.log(elemento);
}

//alternativa con foreach
nombres.forEach(function (nombre) {
  console.log(nombre);
}); 

//FUNCIÓN MAP PERMITE GENERAR COPIA DE UN ARRAY
const array2 = nombres.map(function (nombre) {
  console.log(nombre);
  return nombre;
});

console.log(nombres);
console.log(array2);

//FUNCIÓN FIND: ubicar elementos en un arreglo
const resultado = nombres.find(function (nombre) {
  if (nombre === "Pablo") {
    return nombre;
  }
});

console.log(resultado);

//FUNCIÓN FILTER: recorre el arreglo filtrando el resultado
const resultado2 = nombres.filter(function (nombre) {
  if (nombre != "Pablo") {
    return nombre;
  }
});

console.log(nombres);
console.log(resultado2);

//Función CONCAT:
const edades = [78, 89, 12, 8, 10, 15];
console.log(nombres.concat(edades));

//SPREAD OPERATOR tiene la misma función que CONCAT
console.log([...nombres, ...edades]); 

//MÓDULOS: IMPORT & EXPORT

import * as calc from "./calculadora.js";

console.log(calc.suma(45, 54));
console.log(calc.resta(45, 54)); */

//---------------------- ASINCRONÍA CON JS------------------------//

//ejemplo de promesa
/*const ul = document.createElement("ul");

let datos = fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function (Response) {
    console.log("Carga de datos completada");
    return Response.json();
  })
  .then(function (data) {
    console.log(data);
    data.forEach(function (post) {
      const li = document.createElement("li");
      li.innerHTML = post.title;
      ul.append(li);
    });
    document.body.append(ul);
  });

console.log("Cargando HTML");
console.log("Cargando CSS");
console.log("Cargando imágenes");*/

//Ejemplo con Async Await (mismo ejemplo que el anterior pero simplificado)
const ul = document.createElement("ul");

async function cargarDatos() {
  const Response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const datos = await Response.json();
  console.log(datos);
  datos.forEach(function (post) {
    const li = document.createElement("li");
    li.innerHTML = post.title;
    ul.append(li);
  });
  document.body.append(ul);
}

cargarDatos();
console.log("Cargando HTML"); //estos console.log solamente nos sirven para observar el orden en que se ejecutan las tareas del programa
console.log("Cargando CSS");
console.log("Cargando imágenes");
