const removeFromArray = function (arr, ...args) {
  const new_arr = [];
  for (ele of arr) {
    if (!args.includes(ele)) {
      new_arr.push(ele);
    }
  }
  return new_arr;
};

// Do not edit below this line
module.exports = removeFromArray;
