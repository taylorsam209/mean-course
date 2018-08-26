// function log(message) {
//   console.log(message);
// }

// var message = 'Hellow Word';

// log(message);

// normal js
// let a: number;
// let b: boolean;

// Js constant
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

// enum Color {Red, Green, Blue}

// let backgroundColor = Color.Red;

function hello(max) {
  // console.log(arguments[0]);
  for(let prop in arguments) {
    console.log(arguments[prop])
  }
  let count = 1;

while(count <= max) {
  console.log('Check')
  count++;
}

};

hello(8);