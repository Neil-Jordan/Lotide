const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
//fnc given an array and object
//return object containing count of everything that input object listed (if object key has value of true, and key is in array, add to new array)
const countOnly = function(allItems, itemsToCount) {
  let newObj = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
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

const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];

const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": true});

console.log("result1:", result1);

console.log("aE1: ", assertEqual(result1["Jason"], 1));
console.log("aE2: ", assertEqual(result1["Karima"], undefined));
console.log("aE3: ", assertEqual(result1["Fang"], 2));
console.log("aE4: ", assertEqual(result1["Agouhanna"], undefined));
//assertEqual(result1["Karima"], undefined);
//assertEqual(result1["Fang"], 2);
//assertEqual(result1["Agouhanna"], undefined);