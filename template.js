const first = 'Minato';
const last = 'Aoi';
const greet = 'Ohayou gozaimasu';

const name = first + ' ' + last + ' ' + greet;

console.log(name);
const a = 10;
const b = 20;
const result = 'The sum of ' + a + ' and ' + b + ' is ' + (a + b);
console.log(result);

const numbers = [45, 48, 98, 78];
const student = {name: 'John Cena', age: 5}
// const math = `The sum of ${a} and ${b} is ${a + b}`
const math = `The sum of ${numbers[0]} and ${student.age} is ${numbers[0] + student.age}`
console.log(math);



const challenge = 'John Cena \n' +
'wants to fight \n' +
'all the time. \n';
console.log(challenge);

const challenge2 = `John Cena
wants to fight
all the time.`
console.log(challenge2);