const repeatString = function (text, repeatCnt) {
  if (repeatCnt < 0) {
    return "ERROR";
  }
  return text.repeat(repeatCnt);
};

// Do not edit below this line
module.exports = repeatString;
