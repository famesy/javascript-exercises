const palindromes = function (text) {
  const allowCharacters = "abcdefghtjklmnopqrstuvwxyz1234567890";
  text = text.toLowerCase().split("");
  text = text.filter((char) => allowCharacters.includes(char));
  text = text.join("");
  const reversed_text = text.split("").reverse().join("");
  return text === reversed_text;
};

// Do not edit below this line
module.exports = palindromes;
