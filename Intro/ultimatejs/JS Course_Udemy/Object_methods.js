/*
If a function is only another type of value, and then, if a function is a value, that means that we can create key-value pair that is
a function. That mean we can add FUNCTION EXPRESSIONS to objects.

THIS key word: the variable es basically the same as the object in which the method is called, or in other words, it is equal to the object
 calling the method.

 
*/


//example using function

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    /* VERSION 1
    calcAge : function(birthYear){
        return 2037 - birthYear;
    }*/

    /*VERSION 2
    calcAge : function(){
        console.log(this); //"THIS" will be the object JONAS because "THIS" method point to the object that is calling the function right here: console.log(jonas.calcAge()); .
        return 2037 - this.birthYear;
    }*/

    calcAge : function(){
        this.age = 2037 - this.birthYear;
        return this.age;
    },

        //challenge method
    getSummary: function(){
    return `${this.firstName} is a ${this.calcAge()} - year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }


}
//we also can access to this function in the object

    console.log(jonas.calcAge()); //"jonas" is calling the method here (the function calcAge)  //EXAMPPLE FOR VERSION 1 AND V2 function
    //console.log(jonas['calcAge'](1991));

    //the best way to pass the age is not repeating so many times the year, so we need to use the "THIS" key word.

    console.log(jonas.age); //using this third version, we can avoid repeat many time the age calculation when we need to access it in several times during the program
    console.log(jonas.age);
    console.log(jonas.age);

//challenge:
//"Jonas is a 46-year old teacher, and he has a/no driver's license"
console.log(jonas.getSummary());