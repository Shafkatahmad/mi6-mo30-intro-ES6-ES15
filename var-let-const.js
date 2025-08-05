/**
 * var : no reason to use var
 * let : allow it to reassign
 * const : do not allow it to reassign
 */

const money = 25;
// money = 50;
const rich = money + 25;
// console.log(rich);

let count = 0;
count = count + 10;
// console.log(count);


// Can't reassign. But can modify
const numbers = [23, 4, 23, 12, 56];
// numbers = [4, 5, 6, 7];
numbers[1] = 55;
numbers.push(8, 9, 65);
// console.log(numbers);

// object
const student = {
  name: 'Mike Steven',
  class: 12
}

// student = {name: 'John Sina'}
student.name = 'John Sina';

// console.log(student);

// loop
let sum = 0;
for(let i = 0; i < 10; i++) {
  const num = i; // const num gets redeclared for each loop from i=0 to i<10. and only stays in the memory block for that one loop each time.
  sum = sum + num;
}
console.log(sum);