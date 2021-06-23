const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const findKeyByValue = function(object, value) {
  let objectKey = Object.keys(object);
  let index = 0;

  for (let element in object) {
    if (object[element] === value) {
      return objectKey[index];
    }
    index++;
  }
  return undefined;
};

const bestGamesByGenre = {
  strategy: "StarCraft 2",
  adventure: "Horizon: Zero Dawn",
  casual: "Spiritfarer"
};

console.log(findKeyByValue(bestGamesByGenre, "StarCraft 2"));
console.log(findKeyByValue(bestGamesByGenre, "LoL"));

assertEqual(findKeyByValue(bestGamesByGenre, "Spiritfarer"), "rpg");
assertEqual(findKeyByValue(bestGamesByGenre, "League of Legends"), undefined);
