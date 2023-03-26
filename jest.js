test("romanToInt function works", () => {
  expect(romanToInt("I")).toBe(1);
  expect(romanToInt("V")).toBe(5);
  expect(romanToInt("IX")).toBe(9);
  expect(romanToInt("XL")).toBe(40);
  expect(romanToInt("LXXXVIII")).toBe(88);
  expect(romanToInt("CDXCIV")).toBe(494);
  expect(romanToInt("MCMXCIV")).toBe(1994);
});

test("intToRoman function works", () => {
  expect(intToRoman(1)).toBe("I");
  expect(intToRoman(5)).toBe("V");
  expect(intToRoman(9)).toBe("IX");
  expect(intToRoman(40)).toBe("XL");
  expect(intToRoman(88)).toBe("LXXXVIII");
  expect(intToRoman(494)).toBe("CDXCIV");
  expect(intToRoman(1994)).toBe("MCMXCIV");
});
