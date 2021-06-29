const findKeyByValue = require('../findKeyByValue');
const assertEqual = require('../assertEqual');

const bestGamesByGenre = {
  strategy: "StarCraft 2",
  adventure: "Horizon: Zero Dawn",
  casual: "Spiritfarer"
};

console.log(findKeyByValue(bestGamesByGenre, "StarCraft 2"));
console.log(findKeyByValue(bestGamesByGenre, "LoL"));

assertEqual(findKeyByValue(bestGamesByGenre, "Spiritfarer"), "rpg");
assertEqual(findKeyByValue(bestGamesByGenre, "League of Legends"), undefined);
