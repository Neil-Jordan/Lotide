/* const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
}; */

/*
    function takes in a sentence (as a string)
    return a count of each letter in the sentence
*/
//take string as input
const countLetters = function(string) {
  //accumulator
  let counts = {};
  //iterate throug each value in string
  for (let value of string) {
    //skipping over special characters or spaces
    if (value === "  ! , . -" || value === " ") {
      continue;
      //increment if value in string occurs (if only present once, value stays at 1)
    } else if (!counts[value]) {
      counts[value] = 1;
    } else {
      counts[value] += 1;
    }
  }
  return counts;
};

//countLetters("justGEOH is the best gamer ever!?");
console.log(countLetters("justGEOH is the best gamer ever"));