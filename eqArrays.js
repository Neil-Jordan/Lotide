//const assertEqual = require('./assertEqual');


const eqArrays = function(array1, array2) {
  //confirm arrays are same lengtth
  if (array1.length === array2.length) {
    let isEqual = true;
    //loop through array to confirm each element is the same
    for (let i = 0; i < array1.length; i++) {
      //if any index items dont match, change isEqual to false
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

module.exports = eqArrays;
