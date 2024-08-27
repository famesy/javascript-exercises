const convertToCelsius = function (temp_fh) {
  return Math.round((((temp_fh - 32) * 5) / 9) * 10) / 10;
};

const convertToFahrenheit = function (temp_c) {
  return Math.round(((temp_c * 9) / 5 + 32) * 10) / 10;
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
