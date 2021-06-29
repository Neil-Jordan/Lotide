const eqObjects = require('../eqObjects');
const assertObjectsEqual = require('../assertObjectsEqual');


assertObjectsEqual(eqObjects([1, 2, 3], [1, 2, 3]), true);