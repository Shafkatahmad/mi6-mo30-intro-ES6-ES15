const acotr = {
  name: 'Ananta',
  age: 30,
  phone: '91202020',
  money: 12345678
}

// if right side is an object left side of destructuring will be object as well
// use property name as a variable that contains the property value
const {phone, age: boyos} = acotr
// const phone = acotr.phone;
// const name = acotr.name;
// const age = acotr.age;

console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(boyos);
console.log(boyos);
console.log(boyos);
console.log(acotr);

// array destructring
const numbers = [45, 99];
const [first, second] = numbers;
const [x, y] = [12, 66];
console.log(first);
console.log(x);
console.log(numbers);

// advanced
function doubleThem(a, b) {
  return [a*2, b*2];
}

const [prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom, ditiyo);