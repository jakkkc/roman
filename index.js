function romanToInt(romanNumeral) {
  const romanDict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < romanNumeral.length; i++) {
    if (i > 0 && romanDict[romanNumeral[i]] > romanDict[romanNumeral[i - 1]]) {
      result += romanDict[romanNumeral[i]] - 2 * romanDict[romanNumeral[i - 1]];
    } else {
      result += romanDict[romanNumeral[i]];
    }
  }
  return result;
}

function intToRoman(integer) {
  const romanDict = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };
  let result = "";
  for (let value in Object.keys(romanDict).reverse()) {
    value = parseInt(value);
    while (integer >= value) {
      result += romanDict[value];
      integer -= value;
    }
  }
  return result;
}
