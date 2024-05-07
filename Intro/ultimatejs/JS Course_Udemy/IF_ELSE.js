
const age = 18;

if (age >= 18){
    console.log('Sarah can start driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);  //en esta línea retomamos el tema del template liteal
}


//otra manera de tomar una decisión es creando una varible booleana para ponerla en el IF. Por ejemplo:

const isOldEnough = age >= 18;

if (isOldEnough){   //solo si esta sentencia es verdadera, ejecutará el código
    console.log('Sarah can start driving license');  
}


//EJEMPLO 2 (falta declarar una manera en que el siglo se calcule para que se pueda usar una fecha diferente al siglo XX y XXI)

const birthYear = 1998;

let century;

if (birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}

console.log(century);