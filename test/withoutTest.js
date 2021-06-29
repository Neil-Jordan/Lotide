const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');

let test1 = ["hello", "bye", "hola", "adios"];
let test2 = ["hey", "link", "listen"];

console.log(without(test1, ["bye"]));
console.log(without(test2, ["lol"]));

assertArraysEqual(test2, ["hey", "link", "listen"]);