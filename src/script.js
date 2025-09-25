let age = 10;
let myName = "Moslem";
let isHere = true;
let x = undefined;
let y = null;
let arr = [1, 2, 3, 4, 5];

console.log("age: ", age, "type: ", typeof age);
console.log("myName: ", myName, "type: ", typeof myName);
console.log("isHere: ", isHere, "type: ", typeof isHere);
console.log("x: ", x, "type: ", typeof x);
console.log("y: ", y, "type: ", typeof y);
console.log("arr: ", arr, "type: ", typeof arr);

const z = 100;

// to access array element inside arr
// we use the arra_name[index] notation

console.log(
  "#################################################################"
);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

const myStuff = [false, "Hello", 100, undefined];

// inital array values
console.log(myStuff);

// add to the end of the array
myStuff.push(700);
myStuff.push("Javascript");


// add at the start of the arrray
myStuff.unshift(true);
myStuff.unshift("Maybe");

// remove elements from the end
console.log(myStuff);
myStuff.pop()
console.log(myStuff);
