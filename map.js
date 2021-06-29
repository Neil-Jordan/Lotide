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


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    console.log('item before: ', item);
    console.log('item after: ', callback(item));
    console.log('---');
  }
  return results;
};


const results1 = map(words, word => word[0]);
//console.log(results1);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 'd']);


const results2 = map(words, word => word + ' ' + 'alert');
assertArraysEqual(results2, ["ground alert", "control alert", "to alert", "major alert", "tom alert"]);

const results3 = map(words, word => word.toUpperCase());
assertArraysEqual(results3, ["GROUND", "CONTROL", 'TO', 'MAJOR', 'TOM']);

const results4 = map(words, word => word.legnth);
assertArraysEqual(results4, [6, 7, 2, 5, 2]);
