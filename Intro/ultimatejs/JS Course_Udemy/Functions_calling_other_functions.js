

//                                      FUNCTIONS CALLING OTHER FUNCTIONS

//Ej:

        function cutFruitPieces(fruit){
            return fruit * 4;  //we cut the fruit into 4 pieces.
        }

        function fruitProcessor (apples, oranges){
            const applePieces = cutFruitPieces(apples);
            const orangePieces = cutFruitPieces(oranges);

            const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
            return juice;
        }

        console.log(fruitProcessor(2,3));  

        //result: Juice with 8 piece of apple and 12 pieces of orange.


        //SECOND EXAMPLE

        function calcAge(birthYear){
            return 2037 - birthYear;
        }

        const yearsUntilRetirement = function (birthYear, firstName){
            const age = calcAge(birthYear); //calling another function
            const retirement = 65 - age;

            if (retirement > 0){
                console.log(`${firstName} retires in ${retirement} years.`);
                return retirement;
            }else{
                console.log(`${firstName} has already retired.`)
                return retirement; // we could wirte just -1. This is a kind of standard number in programming. A number that shows it has no meaning.
            }
        }

        console.log(yearsUntilRetirement(1992,'Jonas'));
        console.log(yearsUntilRetirement(1968, 'Mike'));