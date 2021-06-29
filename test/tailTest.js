const assertEqual = require('../assertEqual');
const arrayTail = require('../tail.js');
const words = ["Light", "house", "Labs", "hello", "bug", "animal"];


assertEqual(arrayTail(words).length, 3);
