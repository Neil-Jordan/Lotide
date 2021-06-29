const assertEqual = require('../assertEqual');
const countOnly = require('../countOnly');


const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];

const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": true});

console.log("result1:", result1);

console.log("aE1: ", assertEqual(result1["Jason"], 1));
console.log("aE2: ", assertEqual(result1["Karima"], undefined));
console.log("aE3: ", assertEqual(result1["Fang"], 2));
console.log("aE4: ", assertEqual(result1["Agouhanna"], undefined));