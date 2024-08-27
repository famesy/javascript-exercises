const sumAll = function (num_1, num_2) {
  if (!Number.isInteger(num_1) || !Number.isInteger(num_2)) {
    return "ERROR";
  }
  if (num_1 < 0 || num_2 < 0) {
    return "ERROR";
  }
  if (num_1 > num_2) {
    let temp = num_1;
    num_1 = num_2;
    num_2 = temp;
  }

  let sum = 0;
  for (let i = num_1; i < num_2 + 1; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
