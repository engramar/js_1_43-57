#Manipulate Arrays With pop()
// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray = myArray.pop();

#Manipulate Arrays With shift()
// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray = myArray.shift();

#Manipulate Arrays With unshift()
// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul",35]);

#Shopping List
var myList = [
    ["Chocolate 1", 15],
    ["Chocolate 2", 15],
    ["Chocolate 3", 15],
    ["Chocolate 4", 15],
    ["Chocolate 5", 15]
];

#Write Reusable JavaScript with Functions
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();

#Passing Values to Functions with Arguments
function functionWithArgs(param1, param2) {
  console.log(param1+param2);
}
functionWithArgs(1,2);

#Global Scope and Functions
// Declare the myGlobal variable below this line
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

#Local Scope and Functions
function myLocalScope() {
  'use strict';

  // Only change code below this line
  var myVar;
  console.log('inside myLocalScope', myVar);
}

myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);


#Global vs. Local Scope in Functions
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();

#Return a Value from a Function with Return
function timesFive(num) {
  return num * 5;
}
var answer = timesFive(5); 

#Understanding Undefined Value returned from a Function
// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}

// Only change code above this line
addThree();
addFive();

#Assignment with a Returned Value
// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);

#Stand in Line
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  return arr.shift();
  // return item;
  // Only change code above this line
}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

#Understanding Boolean Values
function welcomeToBooleans() {
  // Only change code below this line
  return true; // Change this line
  // Only change code above this line
}

#Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if (wasThatTrue){
    return "Yes, that was true"
  }
  return "No, that was false"
  // Only change code above this line
}

