
/*
JS has some built in functions that we can basically apply directly on arrays. These are called METHODS.
There are several types of methods. In this file will appear only the basic ones.

PUSH method: adds elements to the end of an array.

UNSHIFT method: adds elements at the beggining of an array.

POP method: does the opposite of the push method. This method will remove the last element of the array.

SHIFT method: removes the first element of the array.
 
indexOF method: tells us in which position a certain element is in the array.

INCLUDES method: (ES6 method) instead of returning the index the element, returns TRUE if the element is in the array or FALSE if it's not.

*/

//example PUSH

        const friends = ['Michael', 'Steven', 'Peter'];

        friends.push('Jay');
        console.log(friends);

        /* Since push is a function it can also return something. We can pass arguments as we did (with "Jay") and the function returns the new lenght by adding the new element
        we can prove it doing this:

            friends.push('Jay');
            const newLength = friends.push('Jay');
            console.log(newLength);   we get here "4"
        
        */


//example UNSHIFT

friends.unshift('John');
console.log(friends);


//example POP

    //In this case, we do not need to add any argument because it just take out the last element.

    friends.pop();  //this method returns the removed element
    //const popped = friends.pop();
    console.log(friends);  


//example SHIFT

    friends.shift();
    console.log(friends); 


//example indexOf

    console.log(friends.indexOf('Steven'));
            //When we pass an element that doesn't exist in the array, indexOf returns "- 1"



// example INCLUDES

    console.log(friends.includes('Steven'));  //this method use strict equality for the check.
    console.log(friends.includes('Bob'));

    if(friends.includes('Steven')){
        console.log('You have a friend called Steven');  //If Steven does not exist in the array, this lines will return nothing
    }