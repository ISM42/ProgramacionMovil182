
const day = 'Monday';

switch(day) { 
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break; //si no colocamos el break, se ejecutarán las líneas siguientes hasta que encuentre un break.
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday': //al escribir dos cases juntos, indicamos que ambos ejecutaran las mismas líneas de código siguiente
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:            //el caso default lo vamos a utilizar para cuando los demás casos fallen
        console.log('Not a valid day!');


}

//challenge: codificar la misma lógica usando else/if. Se requiere usar un operador lógico para traducir el caso del miércoles y el jueves.

if (day === 'monday'){
    console.log('Plan course structure');
        console.log('Go to coding meetup');
} else if (day === 'tuesday'){
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday'){
    console.log('Write code examples');
}else if (day === 'friday'){
    console.log('Record videos');
} else if(day === 'saturday' || day === 'sunday'){
    console.log('Enjoy the weekend :D')
} else {
    console.log('Not a valid day!')
}