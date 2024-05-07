/*
=== Se usa cuando ambos valores en cada lado son exactamente los mismos por lo que su salida es un TRUE.

=== es un strict equality operator. It is strict because it does not perform type coercion. And only returns true (to?) when both 
values are exactly the same.

There's also the loose equelity operator ==, this actually type coercion.

Para el operador "diferente de" también tenemos un strict version y un loose version:
!== (strict), != (loose).
*/

const age = 18;

if (age === 18) console.log('You just became an adult! :D  (strict)'); // usando ===, la salida siempre es TRUE por lo que podemos evitar las {} del if y pasar directo al console.log

if (age === 18) console.log('You just became an adult! :D  (loose)'); //solo esta línea será ejecutada si el valor de age se escribe como string '18' ya que permite coercion, mientras que === no lo admite.


//ejemplo

//prompt es una función que se utiliza para pedir información al usuario, dicha información debe guardarse en una variable

const favourite = prompt ("What's your favourite number?");
console.log(favourite); //se guarda como un string, igual podemos comprobarlo con un "typeof"

//si queremos que el número almacenado se guarde como un número y deseamos hacer la conversión manualmente para poder usar === como buena
//práctica, modificaremos nuestro prompt de la siguiente manera:

const favourit = Number(prompt ("What's your favourite number?"));


//podemos usar varias condiciones en un if else, tantas como queramos agregando un ELSE IF. Ejemplo:

if (favourite === 23){
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7){
    console.log('7 is also a cool number!')
} else{
    console.log('Number is not 23 or 7!');
}