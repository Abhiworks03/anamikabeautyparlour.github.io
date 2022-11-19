/* 
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = 23;
titleCaseOver = 52;
console.log(studlyCapVar);
console.log(properCamelCase);
console.log(titleCaseOver);

console.log(studlyCapVar + properCamelCase + titleCaseOver);

var sum = 19 + 23;
console.log(sum);

var reminder = 11 % 3;
console.log(reminder);

var firstName = "Abhishek ";
var lastName = "Sharma";

console.log(firstName + lastName);
*/
/* var myStr = 'There are " double quotes " inside the string.';
myStr += "Firstline\n Second Line \n Third Line";
console.log(myStr);

var stringlength;
var letterPosition;
myStr = "Hello world";
letterPosition = myStr[6];
stringlength = myStr.length;
console.log(myStr);
console.log(stringlength);
console.log(letterPosition); */

/* function wordBlanks(myAdjective, myNoun, myVerb, myAdverb) {
  var result = "";
  result +=
    "The " +
    myAdjective +
    " " +
    myNoun +
    " " +
    myVerb +
    " to the store " +
    myAdverb;
return result;
}

console.log(wordBlanks("big", "dog", "ran", "quickly"));
console.log(wordBlanks("slow", "bike", "flew", "slowly   "));
 */
/* var ourArray = [50, 60, 70];
var ourData = ourArray[1];
console.log(ourArray);
ourArray[1] = 34;
var ourData = ourArray[1];
console.log(ourArray);
console.log(ourData);

var ourArray1 = [
  [50, 60, 70],
  [23, 23, 42],
  [232, 233, 422],
];
console.log(ourArray1); */

/* array retrival
var myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

var myData = myArray[3][0][1];
console.log(myData); */

/* // Add data to array using Push command.

var ourArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(ourArray);
ourArray.push([10, 11, 12]);
console.log(ourArray);

ourArray.pop([1, 2, 3]);
console.log(ourArray);
ourArray.pop();
console.log(ourArray);
ourArray.pop();
console.log(ourArray);
 */
/* // Manipulate array with shift and unshift command.
var ourArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(ourArray);
var removedFromArray = ourArray.shift();
console.log(removedFromArray);
console.log(ourArray);
ourArray.unshift([1, 2, 3]);
console.log(ourArray); */

// calling function in js.
/* function callHelloWorld() {
  console.log("Hello World");
}

callHelloWorld();

function sumTwoNo(a, b) {
  console.log(a + b);
  console.log(a - b);
}

callHelloWorld();
sumTwoNo(12, 123);
 */

// return command
/* var sum = 0;
function addThree() {
  sum = sum + 3;
}
addThree();
console.log(sum);

function addFive() {
  sum += 5;
  return sum;
}
addFive();
console.log(sum);
 */

// Assignment value to Retuned Value
/* var changed = 0;
function change(num) {
  return (num + 5) / 3;
}
changed = change(10);
console.log(changed);

var processed = 0;
function processArg(num) {
  return (num + 5) / 3;
} */

// NextInLine function
/* function NextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before:" + JSON.stringify(testArr));
console.log(NextInLine(testArr, 6));
console.log("after: " + JSON.stringify(testArr));
 */
// if statement with strict equality operator.
/* function testStrict(val) {
  if (val === 4) {
    return "equal";
  }
  return "Not equal";
}

console.log(testStrict(4));
console.log(testStrict("4"));

function testNormal(val) {
  if (val == 4) {
    return "equal";
  }
  return "Not equal";
}

console.log(testNormal(4));
console.log(testNormal("4"));
 */

// Returning boolean from function

function isless(a, b) {
  if (a < b) {
    return true;
  } else {
    return false;
  }
}

function abTest(a, b) {
  if (a <= 0 || b <= 0) {
    return undefined;
  } else {
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
}

// counting cards

var count = 0;
function cc(Card) {
  switch (Card) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  var holdbet = "hold";
  if (count > 0) {
    holdbet = "Bet";
  }
  return count + " " + holdbet;
}

cc(2);
cc("K");
cc(10);
cc("K");
cc("A");

// Building Js Objects

var myDog = {
  name: "Honey",
  legs: 4,
  tail: 1,
  friends: ["Everything!"],
};

var testObj = {
  hat: "ballcap",
  shirt: "jersay",
  shoes: "cleats",
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

testObj.hat = "new cap";
testObj.pant = "chinos";
testObj.glasses = "avitor";
console.log(testObj);
console.log(hatValue);

delete testObj.glasses;
console.log(testObj);

// 16. using objects for lookups instead switch.
