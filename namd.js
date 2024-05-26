
console.log('---2024-05-24-----');
// [ 10, 2, 8, 4, 6 ] -> [2]  true   
// [ 10, 2, 8, 4, 6 ] -> [2, 8] true
// [ 10, 2, 8, 4, 6 ] -> [2, 8, 4]  true
// [ 10, 2, 8, 4, 6 ] -> [2, 8, 6]   false

const marks = [ 10, 2, 8, 4, 6 ];
const a = [];

function turboIndexOf(marks, a) {
    return marks.join('').indexOf(a.join('')) < 0 
    ? 'false' : 'true';
}
console.log(turboIndexOf(marks, [2, 8, 10]));
console.log(turboIndexOf(marks, [2]));
console.log(turboIndexOf(marks, [2, 8]));
console.log(turboIndexOf(marks, [2, 8, 4]));
console.log(turboIndexOf(marks, [2, 8, 6]));

console.log('-----ND-05-21-----');              
// ND --> I need x € [23; 617] ;  
const s = 23;
const f = 617;

for (let i = 0; i < 10; i++) {
    const x = Math.floor(Math.random() * (f - s + 1) + s);
    console.log(x);
}
