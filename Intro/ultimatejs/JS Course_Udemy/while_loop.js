

/*
To implement a WHILE LOOP we need the same components as the FOR LOOP. 
We need a COUNTER, a CONDITION, to increase the counter. Nevertheless, in WHILE loop we can only specify a condition.

The conditions does not need to be related to the counter

//EXAMPLE FOR LOOP
for (let rep = 1; rep <= 10; rep++) {   //rep = rep +1
console.log(`Lifting weights repetition ${rep}`);
}
*/

//SAME EXAMPLE FOR LOOP WITH WHILE LOOP

let rep = 1;
while(rep <= 10){
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}


//example without using a counter, it will depend on a random variable (dado)

let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}
