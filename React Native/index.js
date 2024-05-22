console.log("Hola mundo");

function suma(a, b) {
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
