function translateRomanNumeral (romanNumeral) {
  
  let res = 0;
  romanNumeral = romanNumeral.split('');

  //Check if valid digits
  for(let i of romanNumeral) {
    if (Object.keys(DIGIT_VALUES).indexOf(i) < 0)
      return null;
  }

  for(let i of romanNumeral) {
    res += DIGIT_VALUES[i];
  }

  return res;

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

console.log(translateRomanNumeral("VI")) // === 6)
// console.log(translateRomanNumeral("X") === 10)
// console.log(translateRomanNumeral("M") === 1000)
// console.log(translateRomanNumeral("VII") === 7)
// console.log(translateRomanNumeral("D") === 500 )
// console.log(translateRomanNumeral("MCMX") === )
// console.log(translateRomanNumeral("horse") === null)
// console.log(translateRomanNumeral("MDCCCCX") === )
