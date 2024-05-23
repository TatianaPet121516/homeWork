console.log(`---Define a card suit---8kyu`)

function defineSuit(card) {
  return {
    '♣': 'clubs',
    '♦': 'diamonds',
    '♥': 'hearts',
    '♠': 'spades'
    }[card.substr(-1)]
}

// function defineSuit(card) {
//     return {'♣': 'clubs', '♠': 'spades', '♦': 'diamonds', '♥': 'hearts'}[card.slice(-1)];
// }

console.log(defineSuit('Q♠'));          // 'spades'
console.log(defineSuit('9♦'));         // 'diamonds'
console.log(defineSuit('J♥'));         // 'hearts'
console.log(defineSuit('10♣'));         // ''clubs'

console.log(`---Check same case----`)
//Write a function that will check if two given characters are the same case.
// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0

const isNotLetter = s => s === s.toUpperCase() && s === s.toLowerCase();
const defineCase = d => d === d.toUpperCase() ? "U" : "L";

function sameCase(a, b){
    if(isNotLetter(a) || isNotLetter(b)) return -1;
    return defineCase(a) === defineCase(b) ?  1 : 0;
}
console.log(sameCase('C', 'B'));            // 1
console.log(sameCase('b', 'a'));            // 1
console.log(sameCase('d', 'd'));            // 1
console.log(sameCase('A', 's'));            // 0
console.log(sameCase('c', 'B'));            // 0
console.log(sameCase('b', 'Z'));            // 0
console.log(sameCase('\t', 'Z'));           // -1
console.log(sameCase('H', ':'));            // -1

console.log(`---Name Shuffler---8kyu`);

// Write a function that returns a string in which firstname is swapped with last name.
// Example(Input --> Output)
// "john McClane" --> "McClane john"

// to use massive:
function nameShuffler(str){
  return str.split(' ').reverse().join(' ')
}
console.log(nameShuffler('john McClane'));       //'McClane john'
console.log(nameShuffler('Mary jeggins'));     //'jeggins Mary'
console.log(nameShuffler('tom jerry'));        //'jerry tom'

console.log(`---Short Long Short---8kyu`);

function solution(a, b) {
  return a.length < b.length ? `${b}${a}${b}` : `${a}${b}${a}`;
}

console.log(solution(45, 1));        
console.log(solution(35, 155));        
console.log(solution(0, 57));        
console.log(solution(2000, 487));        


console.log(`---Sentence Smash---8kyu`)

function smash (words) {
  return words.join(' ');
};

console.log(smash(["hello", "world"]),'-->', "hello world");
console.log(smash(["hello", "amazing", "world"]),'-->', "hello amazing world");
console.log(smash(["this", "is", "a", "really", "long", "sentence"]), '-->', "this is a really long sentence");
 
console.log(`---Return the day---8kyu`)
/*
Complete the function which returns the weekday according 
to the input number:
1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday"
7 returns "Saturday"
Otherwise returns "Wrong, please enter a number between 1 and 7"
*/

function whatday(num) { 
  switch (num) {
    case 1:
     return 'Sunday';
    case 2:
     return 'Monday';
    case 3:
     return 'Tuesday';
    case 4:
     return 'Wednesday';
    case 5:
     return 'Thursday';
    case 6:
     return 'Friday';
    case 7:
     return 'Saturday';
    default:
      return 'Wrong, please enter a number between 1 and 7';
  }
}

console.log(whatday(1),'Sunday');
console.log(whatday(2), 'Monday');
console.log(whatday(3), 'Tuesday');
console.log(whatday(8), 'Wrong, please enter a number between 1 and 7');
console.log(whatday(20), 'Wrong, please enter a number between 1 and 7');


