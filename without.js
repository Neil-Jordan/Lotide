const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    let isEqual = true;
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        isEqual = false;
      }
    }
    if (isEqual) {
      return true;
    } else {
      return false;
    }
  }
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`Assertion failed: ${array1} !== ${array2}`);
  }
};


const without = function(source, itemsToRemove) {
  let newArray = [];
  
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[0]) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};


let test1 = ["hello", "bye", "hola", "adios"];
let test2 = ["hey", "link", "listen"];

console.log(without(test1, ["bye"]));
console.log(without(test2, ["lol"]));

assertArraysEqual(test2, ["hey", "link", "listen"]);