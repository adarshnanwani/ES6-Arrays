console.log('ARRAYS');

const arr1 = [1, 3, 6, 11, 2, 65, 5, 88, 22, 4];
const arr2 = [1, 3, 6, 11, 2, 65, 5, 88, 22, 4];
console.log('arr1', arr1);
console.log('arr2', arr2);

// SORTING
const sortedArr1 = arr1.sort(function (a, b) {
  if (a > b) {
    return -1;
  } else {
    return 1;
  }
});
console.log('sortedArr1', sortedArr1);
console.log('arr1 right after sort', arr1); // Sort changes the original array

// FILTERING
const filteredArr1 = arr1.filter((item) => {
  if (item >= 20) {
    return true;
  }
});
console.log('filteredArr1', filteredArr1);

// FIND
const findArr1 = arr1.find((item) => {
  if (item >= 20) {
    return true;
  }
});
console.log('findArr1', findArr1);

const number6 = 6;
const numberNinety = 90;

// INCLUDES - to check if an element belongs to an array
console.log('arr1.includes(number6)', arr1.includes(number6));
console.log('arr1.includes(numberNinety)', arr1.includes(numberNinety));

// INDEX OF
const index6 = arr2.indexOf(number6);
console.log('index6', index6);
console.log('number 6 is in arr1', index6 >= 0);

const index90 = arr2.indexOf(numberNinety);
console.log('index90', index90);
console.log('number 90 is in arr1', index90 >= 0);

// REVERSE
const reversedArr2 = arr2.reverse(); // Changes the original array
console.log('reversedArr2', reversedArr2);
console.log(arr2.reverse());

// SPLICE -- When you have to remove an item from the middle
const newArr2 = arr2.splice(3, 2); // Change the original array
console.log('arr2.splice(3, 2) - newArr2', newArr2);
console.log('arr2 after splice', arr2);

const arr3 = [1, 3, 6, 11, 2, 65, 5, 88, 22, 4];
// SLICE
const slicedArr3 = arr3.slice(3, 8); // Doesn't change the array
console.log('slicedArr3', slicedArr3);
console.log('arr3 after slice', arr3);

// MAP - Perform an operation on every element of an array and
// returns a new array
console.log('arr3', arr3);
const doubleValueArr3 = arr3.map(function (item) {
  return item * 2;
});
console.log('doubleValueArr3', doubleValueArr3);

const mappedArr3 = arr3.map(function (item) {
  if (item % 2 === 0) {
    // Even number
    return item * 2;
  } else {
    return item * 3;
  }
});
console.log('mappedArr3', mappedArr3);

const oddEvenArr3 = arr3.map(function (item) {
  if (item % 2 === 0) {
    // Even number
    return 'Even';
  } else {
    return 'Odd';
  }
});
console.log('oddEvenArr3', oddEvenArr3);
console.clear();
// REDUCE -- Iterate through the array and return a reduced output
const sumOfArr3 = arr3.reduce(function (sum, item) {
  return sum + item;
}, 0);
console.log('sumOfArr3', sumOfArr3);

const sumOfArr3R = arr3.reduce(function (sum, item) {
  return (sum || 0) + item;
});
console.log('sumOfArr3R', sumOfArr3R);

// Find odd elements and double them
const oddArr3 = arr3.reduce(function (oddArr, item) {
  if (item % 2 !== 0) {
    oddArr.push(item);
  }
  return oddArr;
}, []);
console.log('oddArr3', oddArr3);

// Exercises
const persons = [
  { name: 'John', city: 'New York', age: 25, gender: 'male' },
  { name: 'Jane', city: 'Boston', age: 23, gender: 'female' },
  { name: 'Jim', city: 'New York', age: 28, gender: 'male' },
  { name: 'Pam', city: 'New York', age: 27, gender: 'female' },
  { name: 'Oscar', city: 'Scranton', age: 31, gender: 'male' },
  { name: 'Kevin', city: 'Boston', age: 36, gender: 'male' },
];

// #1. Count of people older than 27
const peopleOlderThan27 = persons.filter(function (person) {
  if (person.age > 27) {
    return true;
  }
});
console.log('peopleOlderThan27', peopleOlderThan27);
// #2. Subarray of people living in New York
const peopleInNY = persons.filter(function (person) {
  if (person.city === 'New York') {
    return true;
  }
});
console.log('peopleInNY', peopleInNY);
// #3. Total age of this group of people
const totalAge = persons.reduce(function (sum, person) {
  return sum + person.age;
}, 0);
console.log('Total Age of people', totalAge);
// #4. Add a new property of 'lastName' to each object and give it any value
const newPeopleArr = persons.map(function (person) {
  person.lastName = '';
  return person;
});
persons.forEach(function (person) {
  // Changes the original array
  person.lastName = '';
  return person;
});
console.log('oldPeopleArrWithForEach', persons);
// #5. Find the first person from Boston who appears in this array
const firstPersonFromBoston = persons.find(function (person) {
  if (person.city === 'Boston') {
    return true;
  }
});
console.log('firstPersonFromBoston', firstPersonFromBoston);
// #6. Sort the array in the order of decreasing age (oldest person first)
const ageSortedArray = persons.sort(function (p1, p2) {
  if (p1.age > p2.age) {
    return -1;
  } else {
    return 1;
  }
});
console.log('ageSortedArray', ageSortedArray);
