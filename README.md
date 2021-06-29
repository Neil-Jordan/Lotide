# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @justgeoh/lotide`

**Require it:**

`const _ = require('@justgeoh/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


* assertArraysEqual   - assert whether two arrays are equal
* assertEqual         - assert whether two values are equal
* assertObjectsEqual  - assert whether two objects are equal
* countLetters        - count the number of letters in a string
* countOnly           - provide a count of all items in an object
* eqArrays            - determine whether two arrays are equal
* eqObjects           - determine whether two objects are equal
* findKey             - finding the key for an element in an object
* findKeyByValue      - finding the key of an element by passing the value 
* head                - printing the head of an array
* letterPositions     - determine the positions of letters in a string
* map                 - mapping function
* middle              - providing the middle elements of an object
* reverse             - reversing the elements in an object
* tail                - providing the last element of an object
* takeUntil           - collecting information until a certain point in an object
* without             - making a new array without a specified element