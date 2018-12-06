# RomanNumerals

## Roman Numeral Translator
Given a roman numeral as input, write a function that converts the roman numeral to a number and outputs it.<br>
<br>
In a roman numeral, each character adds its value to the total. See the helper object DIGIT_VALUES for the correspondence between roman numeral characters and integers.<br>
<br>
* VI = 6 (5 + 1 = 6)<br>
* LXX = 70 (50 + 10 + 10 = 70)<br>
* MCC = 1200 (1000 + 100 + 100 = 1200)<br>
<br>
When a smaller numeral appears before a larger one, it becomes a subtractive operation. You can assume only one smaller numeral may appear in front of larger one.<br>
<br>
* IV = 4 (5 – 1 = 4)<br>
* XC = 90 (100 – 10 = 90)<br>
* CM = 900 (1000 – 100 = 900)<br>
<br>
You should return “null” on invalid input.
