console.log("Hola mundo");

function suma(a, b) {
  return a + b;
}

//funcion fatArrow
const suma = (a, b) => {
  return a + b;
};

// fatArrow simplificada
const suma = (a, b) => a + b;

console.log(suma(5, 2));

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
};
