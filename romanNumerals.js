function translateRomanNumeral (romanNumeral) {

  //Check if valid digits
  for(let i of romanNumeral) {
    if (Object.keys(DIGIT_VALUES).indexOf(i) < 0)
      return null;
  }

  

}

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

console.log(translateRomanNumeral("X"))
console.log(translateRomanNumeral("M"))
console.log(translateRomanNumeral("VII"))
console.log(translateRomanNumeral("D"))
console.log(translateRomanNumeral("MCMX"))
console.log(translateRomanNumeral("horse"))
console.log(translateRomanNumeral("MDCCCCX"))
