"use strict";
exports.__esModule = true;
function multiply(num1, num2) {
    var result = num1 * num2;
    return result;
}
console.log(multiply(2, 10));
//optional parameters
function addition(num1, num2) {
    if (num2 != undefined)
        return num1 + num2;
    else
        return num1;
}
console.log(addition(5, 5));
console.log(addition(10));
//default parameter
function subtraction(num1, num2) {
    if (num2 === void 0) { num2 = 1; }
    return num1 - num2;
}
console.log(subtraction(5, 5));
console.log(subtraction(10));
