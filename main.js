const reader = require("readline-sync");
const  converter = require("./converter.js");
const number = reader.questionInt("Please, input a number. ")

console.log(converter.convertToBinary(number))
console.log(converter.convertToHex(number))