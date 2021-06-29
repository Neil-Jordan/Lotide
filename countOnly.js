//const assertEqual = require('./assertEqual');

//fnc given an array and object
//return object containing count of everything that input object listed (if object key has value of true, and key is in array, add to new array)

//take inout of array and object
const countOnly = function(allItems, itemsToCount) {
  //declare output object
  let newObj = {};
  //loop through each item in given array
  for (const item of allItems) {
    //if item in array is found in given object
    if (itemsToCount[item]) {
      //increment item each time its encountered
      if (newObj[item]) {
        newObj[item] += 1;
      } else {
        newObj[item] = 1;
      }
    }
    console.log(item);
  }
  return newObj;
};

module.exports = countOnly;
