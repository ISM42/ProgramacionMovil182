/*
In arrays we can store multiple values, but we can access to the values only using the index or the position fo the element in the array.
To solve this problem, OBJECTS is a kind of directory where we can store values that can be accessed too by the name using a key value-pairs.

The key is basically the name of the variable. 

We use a similar array syntax to write objects but using curly braces.

Objects are a vary important concept in JS.

Just like arrays, we use OBJECTS to essentially group together different variables that really belong together.

The difference between OBJECTS and ARRAYS is that in objects, the order of these values does not matter when we want to retrieve them.

We should use ARRAYS for more ordered data and OBJECTS for more unstructured data.

When we log the OBJECTS in the console they appear in alphabetical order.
*/

        //OBJECT LITERAL SYNTAX (EXAMPLE). THIS IS DE EASIEST WAY TO WRITE AN OBJECT LIST, BUT THERE ARE SEVERAL WAYS TO DO IT.

        const jonas = {
            firstName: 'Jonas',
            lastName: 'Schmedtmann',
            age: 2037 - 1991,
            job: 'teacher',
            friends: ['Michael', 'Peter', 'Steven']
        };


                                        //GETTING DATA FROM A OBJECT STRUCTURE                    
        
            //DOT vs BRACKET NOTATION

//DOT notation example
        console.log(jonas.lastName);

//BRACKET notation example
        console.log(jonas['lastName']);

        /* The difference between these notations is that in the bracket notation we can put any expression (operation) that we'd like
        
        Example:
        */
            const nameKey = 'Name';
            console.log(jonas['first'+ nameKey]);
            console.log(jonas['last' + nameKey]); //here last + nameKey are put together in a string in the console to get "lastName"

        //when do we have to use deep brackets notation?
        //when we need to first compute the property name

        //Another CLEARER EXAMPLE using BRACKET notation

        const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');
        
        if (jonas[interestedIn]){
        console.log(jonas[interestedIn]);
        } else {
            console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
        } 
            //using prompt create a POPUP to the user to receive information of what user wants to do
            //when we receive an answer, we receive a string and then, if the value exist, it will be returned



                                        //ADDING NEW PROPERTIES TO THE OBJECT

    jonas.location = 'Portugal';
    jonas['twitter'] = '@jonasexample';
    console.log(jonas);


    //Challenge using dot notation:
    //Jonas has 3 friends, and his best friend is called Michael

    console.log(`${jonas.firstName} has ${jonas.friends.length} friends: ${jonas['friends']}, and his best friend is called ${jonas.friends[0]}`);