var i = 10000;
for (var i = 0; i < 10; i++) {
  console.log(i);
}

console.log(`after the loop value of i`, i);

function counter() {
  for (var j = 0; j < 10; j++) {
    console.log('From counter function', j);
  }
}
counter();

//console.log(`after the loop value of j`, j);

var x = 1000;
for (let x = 0; x < 10; x++) {
  console.log('with let', x);
}

console.log(`after the loop value of x`, x);

// with const reassignment is not allowed

const person = {
  name: 'John',
};

person.lateName = 'Doe';
console.log(person);

// person = {
//   name: 'Jane',
// };

let age = 25;
age = 36;
console.log(age);

// DESTRUCTURING

const person2 = {
  firstName: 'John',
  lastName: 'Doe',
  city: 'NY',
  age: 25,
};

console.log(
  `${person2.firstName} ${person2.lastName} is ${person2.age} years old and lives in ${person2.city}`
);

const { firstName, lastName, city, age: personAge } = person2; // destructuring
console.log(
  `${firstName} ${lastName} is ${personAge} years old and lives in ${city}`
);
