//const eqArrays = require('./eqArrays');
//const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 === 0) {
    return array.slice(array.length / 2 - 1, array.length / 2 + 1);
  } else {
    let midArray = [];
    let middleValue = Math.round(array.length / 2);
    midArray.push(array[middleValue - 1]);
    return midArray;
  }
};

module.exports = middle;