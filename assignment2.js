/**
 * Problem: 01
 */
const obj = { name: "John", age: 30, city: "New York" };
const arr = [10, 20, 30, 40];
function destructureExample(obj, arr) {
  const { name, age } = obj;
  const [index1, index2] = arr;
  return { name, age, index1, index2 };
}
const resultOne = destructureExample(obj, arr);
console.log(resultOne);

/**
 * Problem: 02 ( rest operator )
 */
function sumNumbers(...numbers) {
  return numbers.reduce((sum, num) => sum + num);
}
const resultTwo = sumNumbers (1, 2, 3, 4, 5)
console.log(resultTwo)

/**
 * Problem: 03 (  template literals )
 */
function createGreeting(name) {
  return `Hello, ${name}! Welcome to our website`;
}
const message = createGreeting("Alice")
console.log(message);

/**
 * Problem: 04 ( ternary operator )
 */
function isEven(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
const result = isEven(7);
console.log(result)

/**
 * Problem: 05 ( Arrow Function )
 */
// function multiply(a, b) {
//   return a * b;
// }

// Arrow function with shortcut method
const multiply = (a, b) => a * b;
console.log(multiply(10, 10));

/**
 * Problem: 06 ( Large Number )
 */
function getLargestNumber(number1, number2) {
  return number1 > number2
    ? `Large Number is ${number1}`
    : `Large Number is ${number2}`;
}
const largeNumber = getLargestNumber(20, 15);
console.log(largeNumber);

/**
 * Problem: 07
 */
const address = {
  street: "123 Main St",
  country: "USA",
};

function getAddressCity(address) {
  return address?.city ?? "Unknown";
}
const city = getAddressCity(address);
console.log(city);

/**
 * Problem: 08 ( array map )
 */
function doubleNumbers(arr) {
  return arr.map((num) => num * 2);
}
const double = doubleNumbers([1, 2, 3, 4, 5]);
console.log(double);

/**
 * Problem: 09 ( reduce )
 */

function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}
const filterNumber = filterEvenNumbers([1, 2, 3, 4, 5]);
console.log(filterNumber);


/**
 * Problem: 10 ( reduce )
 */

function sumArray(arr){
  return arr.reduce( ( sum, num ) => sum+num )
}
const reduceResult = sumArray([1, 2, 3, 4, 5]);
console.log(reduceResult);

