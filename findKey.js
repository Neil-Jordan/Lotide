const findKey = function(object, callback) {
  let keysArray = Object.keys(object);
  
  for (let i = 0; i < keysArray.length; i++) {
    if (callback(object[keysArray[i]])) {
      return keysArray[i];
    }
  }
  return undefined;
};

module.exports = findKey;