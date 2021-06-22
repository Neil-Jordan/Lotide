const invert = process.argv;


let reverse = function(string) {
  let output = '';

  for (let i = string.length - 1; i >= 0; i--) {
    output += string [i];
  }
  return output;
};

for (let i = 2; i < invert.length; i++) {
  let string = invert[i];
  console.log(reverse(string));
}