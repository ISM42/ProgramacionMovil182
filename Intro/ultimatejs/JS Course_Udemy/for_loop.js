//EXAMPLE: A LIFTING WEIGHTS REPETITION AT THE GYM

//for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {   //rep = rep +1
console.log(`Lifting weights repetition ${rep}`);
}


// ----------------------------------------------------------------------------------------------------------------------------

                                                                //LOOPING ARRAYS

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];


//here out counter (i) starts 0 because an array is zero based (starts at position 0)
//i < 5 because we have in the array 5 element in the position 0,1,2,3 and 4. Element 5 does not exist here
for (let i = 0; i < 5; i++){
console.log(jonas[i]);
}

//if we optimize this code, we should write the conditional like this (if maybe we don't know how many element has the array:

for (let i = 0; i < jonas.length; i++){
    console.log(jonas[i]);
    }  //so we can add element to the array without changing manually the conditional in the for loop


// ----------------------------------------------------------------------------------------------------------------------------

                                                  //CREATING AND FILLING AN ARRAY WITH A FOR LOOP
//We want create and fill an array with the type of data from JONAS array
//We declare before an empty array outside the for loop:
const types = [];

for (let i = 0; i < jonas.length; i++){
    //reading from jonas array
    console.log(jonas[i]);

    //types[0] = 'string';     how we do it manually (filling the array)
    types[i] = typeof jonas[i];  //we do it now automatically

    //we can also use a method with this line: TYPES.PUSH(TYPEOF JONAS[I]);
    }

    console.log(types); //we prove that it works. The array is already full.


    // ----------------------------------------------------------------------------------------------------------------------------

                                    //EXAMPLE 3: CALCULATING AGES WITH ARRAYS
    
    const years = [1991, 2007, 1969, 2020];

    const ages = [];

    for (let i = 0; i < years.length; i++){
        ages.push(2037-years[i]);
    }

    console.log(ages);


    // ----------------------------------------------------------------------------------------------------------------------------

                                                //CONTINUE AND BREAK STATEMENTS

    //CONTINUE is to exit the current iteration of the loop and continue to the next one.
    //BREAK is used to completely terminate the whole loop.


    //Example 1 (CONTINUE): we only want to print elements that are a string in the array

    console.log('--- ONLY STRINGS ---');
    for (let i = 0; i < jonas.length; i++){

        if (typeof jonas[i] !== 'string') continue; //the elements that are not a string are skipped
        console.log(jonas[i], typeof jonas[i]);
    }


    //EXAMPLE 2 (BREAK): log no other elements after we found a number

    console.log('--- BREAK WITH NUMBER ---');
    for (let i = 0; i < jonas.length; i++){

        if (typeof jonas[i] === 'number') break; //when the loop finds a number breaks and nothing is printed after that, even the numnber is not printed.
        console.log(jonas[i], typeof jonas[i]); //this line is not printed anymore 'cause the loop was interrupted before
    }

       
    
    // ----------------------------------------------------------------------------------------------------------------------------

                                                //LOOPING BACKWARDS

    const jonas2 = [
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

    for (let i = jonas.length - 1; i >= 0; i--){
        console.log(i, jonas[i]); //i is printed only to see the counter
    }


    
    
    // ----------------------------------------------------------------------------------------------------------------------------

                                                //CREATING A LOOP INSIDE A LOOP

    //Example: at the gym we have 3 different exercises and 5 repetitions for each of them

    for (let exercise = 1; exercise < 4; exercise++){
        console.log(`------- Starting exercise ${exercise} ------`);

        for(let rep = 1; rep < 6 ; rep++){
            console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}.`);
        }
    } 