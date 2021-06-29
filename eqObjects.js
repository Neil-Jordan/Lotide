const eqArrays = require('./eqArrays');
//two objects are equal when they have:
//  - same number of keys
//  - same value for each key

const eqObjects = function(object1, object2) {
  const ob1Keys = Object.keys(object1);
  const ob2Keys = Object.keys(object2);
  
  // check if # of keys is the same; if not the same return false
  if (ob1Keys.length !== ob2Keys.length) {
    return false;
  } else {
    //# of keys is the same, so loop through each key in O1
    for (const key in ob1Keys) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        //if there's no equality in the index/key items return false
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else {
        //if the keys for each object do not match
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    //return true after confirming everything matches up
    return true;
  }
};
module.exports = eqObjects;