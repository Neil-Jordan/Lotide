const takeUntil = require('../takeUntil');
const assertArraysEqual = require('..assertArraysEqual/');

const data1 = [1, 2, 4, 8, 16, 32, 64, 128];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const data3 = ['where', 'are', 'you', 'now', 'that', 'i', 'need', 'you', '?'];
const results3 = takeUntil(data3, x => x === '?');
console.log(results3);

assertArraysEqual(results1, data1.slice(0, 5));
assertArraysEqual(results2, data2.slice(0, 4));
assertArraysEqual(results3, ['where', 'are', 'you', 'now', 'that', 'i', 'need', 'you']);