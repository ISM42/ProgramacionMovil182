
//                                                  ARROW FUNCTIONS
//This function was added to JS in ES6.
//It is a simply special form of function expression that is shorter and faster to write.   

    //Previous example of a function expression:
    const calcAge2 = function(birthYear){
        return 2037 -  birthYear;
        }

    //ARROW FUNCTION:
    const calcAge3 = birthYear => 2037 - birthYear; //we don't write here the "return" keyword and parentheses.

    //we call it just the same way as the other type of functions
        const age3 = calcAge3(1991); //we store the value in a variable
        console.log(age3);

    

    //EXAMPLE WHEN WE NEED MORE LINES OF CODE (THEN WE DO NEED WRITE THE "RETURN" KEYWORD):

        const yearsUntilRetirement = birthYear =>{
            const age = 2037 - birthYear;
            const retirement = 65 - age;
            return retirement;
        }

        console.log(yearsUntilRetirement(1991));


    //EXAMPLE IF WE NEED MORE THAN ONE PARAMETER

         const yearsUntilRetirement2 = ( birthYear, firstName) => {
         const age = 2037 - birthYear;
         const retirement = 65 - age;
         return `${firstName} retires in ${retirement} years`;
    }

    console.log(yearsUntilRetirement(1991, 'Jonas'));
    console.log(yearsUntilRetirement(1980, 'Bob'));

    //As we see, array functions are useful for one-liner functions, otherwise they can turn complex.