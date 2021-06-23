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


const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter === " " || letter === " , ! ? . ") {
      continue;
    } else if (!results[letter]) {
      results[letter = [i]];
    } else {
      results[letter].push(i);
    }
  }
  return results;
};

console.log(letterPositions("hello"));

console.log(assertArraysEqual(letterPositions("hello").e, [1]));
