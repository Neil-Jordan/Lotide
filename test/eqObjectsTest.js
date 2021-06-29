const eqObjects = require('../eqObjects');

const cd = { c: "1", d: ["2", 3]};
const dc = { d: ["2", 3], c: "1"};

console.log(eqObjects(cd, dc));