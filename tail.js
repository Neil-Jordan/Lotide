const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const words = ["Light", "house", "Labs", "hello", "bug", "animal"];

const arrayTail = function(array) {
  return array.slice(1);
};

assertEqual(arrayTail(words).length, 3);