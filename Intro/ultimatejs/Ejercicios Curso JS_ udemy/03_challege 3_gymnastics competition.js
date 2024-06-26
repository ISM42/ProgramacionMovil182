/*
CHALLENGE #3
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.



TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.
*/

const scoreDolphins = (97+112+101)/3;
const scoreKoalas = (109+95+123)/3;

if (scoreDolphins===scoreKoalas){
    console.log('Both teams win the trophy!');
}else if(scoreDolphins>scoreKoalas){
    console.log('The Dolphins win the trophy!');
}else{
    console.log('The Koalas win the trophy!')
}

console.log(scoreDolphins, scoreKoalas);

/*
BONUS 1:  Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team,
and the same time a score of at least 100 points. HINT: usea a logical operator to test for minimum score, as well as multiple else-if blocks.

BONUS 2: minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or
equal 100 points. Otherwise, no team wins the trophy.

TEST DATA BONUS 1: Dolphins scored 97, 112, and 101. Koalas scored 109, 95, and 123.
TEST DATA BONUS 2: Dolphins scored 97, 112, and 101. Koalas scored 109, 95, and 106.
*/


//BONUS 1
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log('Dolphins win the trophy!');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100){
    console.log('Koalas win the trophy!')
} else if (scoreDolphins === scoreKoalas){
    console.log('Both win the trophy!');
}


//BONUS 2
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log('Dolphins win the trophy!');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100){
    console.log('Koalas win the trophy!')
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
    console.log('Both win the trophy!');
}else {
    console.log('No one wins the trophy!')
}