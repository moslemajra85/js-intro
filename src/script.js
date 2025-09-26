// let age = 10;
// let myName = "Moslem";
// let isHere = true;
// let x = undefined;
// let y = null;
// let arr = [1, 2, 3, 4, 5];

// console.log("age: ", age, "type: ", typeof age);
// console.log("myName: ", myName, "type: ", typeof myName);
// console.log("isHere: ", isHere, "type: ", typeof isHere);
// console.log("x: ", x, "type: ", typeof x);
// console.log("y: ", y, "type: ", typeof y);
// console.log("arr: ", arr, "type: ", typeof arr);

// const z = 100;

// // to access array element inside arr
// // we use the arra_name[index] notation

// console.log(
//   "#################################################################"
// );
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

// const myStuff = [false, "Hello", 100, undefined];

// // inital array values
// console.log(myStuff);

// // add to the end of the array
// myStuff.push(700);
// myStuff.push("Javascript");

// // add at the start of the arrray
// myStuff.unshift(true);
// myStuff.unshift("Maybe");

// // remove elements from the end
// console.log(myStuff);
// myStuff.pop()
// console.log(myStuff);

let id = 1456;
let firstName = "Moslem";
let lastName = "Ajra";
let email = "ajra@example.com";
let phone = "123-456-33";

const person = {
  id: 123,
  firstName: "Adam",
  lastName: "Smith",
  email: "smith@gmail.com",
  phone: "123-456-33",
};

const car = {
  brand: "BMW",
  model: "X5",
  price: 1200,
  age: 10,
  color: "black",
};

//console.log(car);

// to access objet property we use two notations

// dot notation
// console.log("####################Dot Notation#################")

// console.log("price: ", car.price)
// console.log("age: ", car.age)
// console.log("model: ", car.model)
// console.log("brand: ", car.brand)
// console.log("color: ", car.color)

// console.log("####################Bracket Notation#################")
// // bracket notation
// console.log('Price: ',car['price'])
// console.log('Age: ',car['age'])
// console.log('Model: ',car['model'])
// console.log('Brand: ',car['brand'])
// console.log('color: ',car['color'])

//declaration phase
function sayHello() {
  console.log("Hello World");
}

function add(a, b) {
  return a + b;
}

const divide = function (a, b) {
  if (b === 0) return;

  return a / b;
};

// calling phase

// const value = sayHello();
// console.log("value: ", value);

// const sum = add(10, 20);

// console.log(divide(10, 2));

// Arithmetic operator: + - * / %

// let a  = 20;
// let b = 10;

// console.log("a + b: ", a + b);
// console.log("a - b: ", a - b);
// console.log("a * b: ", a * b);
// console.log("a / b: ", a / b);
// console.log("a % b: ", a % b);

// assignment operator
let x = 10;

// x = x + b <-> x += b
//x = x + 1 // ++x or x++

// comparison operator : >, >=,  <, <= , ===, !==
// console.log(x > 5);

// console.log(x === 7);
// console.log(x !== 7);

// logical operator: &&(and)  ||(or)  !(not)

// let c = 100;
// let d = 200;

// let exp = c > 200 && d === 100;
// console.log("exp: ", exp);

// truthy  , falsy

// falsy value: in a boolean context will be considered as logical false

//""
//0
//null
//undefined
//NaN

let msg = "";

// if (msg) {
//   console.log("Something Wrong");
// } else {
//   console.log("That's ok");
// }

let arr = [];

// arr.length = 0
// 0 --> falsy --> false
// !arr.length --> !false --> trye

// if (!arr.length) {
//   console.log("This is not empty");
// } else {
//   console.log("This is empty");
// }*

// if (arr.length !== 0) {
//   console.log("This is not empty");
// } else {
//   console.log("This is empty");
// }

//  ternary operator: if... else equivalent
//arr.length?  console.log("This is not empty") :  console.log("This is empty");

// conditional statement

let x1 = 10;
let y1 = 20;

let condition = x1 >= y1;
if (condition) {
  console.log("This is true");
}

//console.log("Rest Of the code");

/**
 * if ... else
 *
 * if(condtion is true) {
 *
 *   // logic
 * } else {
 *    // logic
 * }
 *
 */

/**
 *
 * FizzBuzz Algorithm
 *
 *
 */

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  }
}
