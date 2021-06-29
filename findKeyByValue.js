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

module.exports = findKeyByValue;