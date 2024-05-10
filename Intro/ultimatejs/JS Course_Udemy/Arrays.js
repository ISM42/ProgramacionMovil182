
                                                            // ARRAYS

/*In JS the two most important DATA STRUCTURES are ARRAYS and OBJECTS
-Arrays are not primitive values, so even we use "CONST" to create them, we're able to change a value later. The primitive values are immutable
What we CANNOT DO is replace the entire ARRAY using "CONST".

In each position in the arrays JS expects an expression.

We can also store a variable or another arrays in the array.
*/



//Syntax:
        const array_name = ['value1', 'value2', 'value3','valueN'];  //this form is more usual 


//The arrays can hold as many values as we want and also values of any type even at the same time.

//Another way to create an array:

    const year = new Array (1991, 1984, 2008, 2020);



//CALLING JUST ONE ELEMENT
        const friends = ['Michael', 'Steven', 'Peter'];
        console.log(friends);

        console.log(friends[0]); //Arrays are zero-based, this means that the first element will be always in the position 0


//Knowing the amount of elements in the array

    console.log(friends.length);  

        //calling the last element using .LENGTH
        console.log(friends[friends.length - 1]);  //inside the brackets, that is an expression, cannot be a statement. 'cause a expression produces a value.


//CHANGING THE ARRAY (UPDATING AN ELEMENT)

    friends[2] = 'Jay';  //"Peter" was replaced with "Jay"
    console.log(friends);


//EXAMPLE USING DIFFERENT TYPES OF ELEMENTS IN THE ARRAY (VARIABLES, EXPRESSION, ANOTHER ARRAY...)

    const firstName = 'Jonas';

    const Jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
    console.log(Jonas);
    console.log(Jonas.length); //even the array inside (friends) has 3 elements, it olny use one position in the array "Jonas"


//SECOND EXAMPLE USING ARRAYS AND FUNCTIONS
//Calculando edades y guardándolas en variables independientes

    const calcAge = function (birthYear){
        return 2037 - birthYear;
    }

    const years = [1990, 1967, 2002, 2010, 2018];

    const age1 = calcAge(years[0]);
    const age2 = calcAge(years[1]);
    const age3 = calcAge(years[years.length - 1]);
    console.log(age1,age2,age3);

                //calculando edades y guardándo los resultados en una colección (array)
                const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
                console.log(ages);