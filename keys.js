const glass = {name: 'glass', color: 'golden', price: 12, isCleaned: true};

console.log(glass);
// all properties name
const keys = Object.keys(glass);
// [ 'name', 'color', 'price', 'isCleaned' ]

// all properties values
const values = Object.values(glass);
// [ 'glass', 'golden', 12, true ]

const entries = Object.entries(glass);
// array of array, two dimensional array
// [
//   [ 'name', 'glass' ],
//   [ 'color', 'golden' ],
//   [ 'price', 12 ],
//   [ 'isCleaned', true ]
// ]
// console.log(entries);

// delete glass.isCleaned;

const {isCleaned, ...shortGlass} = glass;
// console.log(shortGlass);

// freeze
// Object.freeze(glass);
// glass.scource = 'Bangladesh';
// glass.price = 5000;
// delete glass.name;
// console.log(glass);


Object.seal(glass);
glass.scource = 'Bangladesh';
glass.price = 5000;
delete glass.name;
console.log(glass);

