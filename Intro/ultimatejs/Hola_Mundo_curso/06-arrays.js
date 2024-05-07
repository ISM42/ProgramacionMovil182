//Un array es una colección de datos. JS sí respeta el orden de los datos dentro de un array al loggearlos en consola.
//Los array dentro de JS se comportan como objetos


//Sintaxis:     LET + NOMBRE_ARREGLO = ['dato1', 'dato2'...]

let animales = ['chanchito', 'caballo'];
console.log(animales);

//MOSTRAR UN DATO ESPECÍFICO DEL ARREGLO ACCEDIENDO CON SU ÍNDICE
console.log(animales[0]);


//AGREGAR UN NUEVO ELEMENTO AL ARREGLO CONOCIENDO EL ÍNDICE QUE SE DEBE INSERTAR:
//NOTA: si agregamos un índice equivocado, podemos generar varios elementos vacíos.
animales[2] = 'dragón';

//CONOCER LA CANTIDAD DE ELEMENTOS DENTRO DEL ARREGLO:
console.log(animales.length);