const gameEvents = [
  { type: 'attack', value: 12, target: 'player1' },
  { type: 'eat', target: 'apple' },
  { type: 'run', value: 40 },
  { type: 'attack', value: 23, target: 'player2' },
  { type: 'attack', value: 12, target: 'player1' },
];

// Find out the total damage on player 1
//    Without arrow functions
const totalDamageOnPlayer1 = gameEvents
  .filter(function (event) {
    return event.target === 'player1'; // Find player 1
  })
  .map(function (event) {
    return event.value; // Extract damage value
  })
  .reduce(function (sum, item) {
    return sum + item; // return sum
  }, 0);
console.log('totalDamageOnPlayer1', totalDamageOnPlayer1);

//    With arrow functions
const totalDamageOnPlayer1WithArrow = gameEvents
  .filter((event) => event.target === 'player1') // Find player 1
  .map((event) => event.value) // Extract damage value
  .reduce((sum, item) => sum + item, 0); // return sum
console.log('totalDamageOnPlayer1WithArrow', totalDamageOnPlayer1WithArrow);

//    With arrow functions
const isPlayer = (event, player) => event.target === player;
const returnDamage = (event) => event.value;
const reduceSum = (sum, item) => (sum || 0) + item;

const totalDamageOnPlayer2WithArrow2 = gameEvents
  .filter((event) => isPlayer(event, 'player2')) // Find player 2
  .map(returnDamage) // Extract damage value
  .reduce(reduceSum); // return sum

console.log('totalDamageOnPlayer2WithArrow2', totalDamageOnPlayer2WithArrow2);

// Example of named arrow functions
function sum(n1, n2) {
  return n1 + n2;
}
const sumArrow = (n1, n2) => n1 + n2;
