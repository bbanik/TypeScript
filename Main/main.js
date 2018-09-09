"use strict";
exports.__esModule = true;
//Variable Declarations
var x = 5;
var y = 15;
//let x= 6; // cannot redeclare blok scoped variable
//const title; // 'const' declarations must be initialized
var title = "TypeScript Demo";
//title = "TypeScript demo title"; //cannot assign to 'title' because it is a constant or a read-only property
// Data Types
//let firstProgram = true;
//let firstProgram = "True";
var firstProgram = true;
//let firstProgram: boolean = "True"; // '"True"' is not assignable to type boolean
var firstName = "Biswanath";
var lastName = "Banik";
var fullName = firstName + lastName;
console.log(fullName);
var sentence = "My Name is " + fullName; // vairable to be used within backticks
console.log(sentence);
//Array
var array1 = [10, 20, 30];
var array2 = ["Biswanath", "Banik"];
//Tuple
var person = ["Biswanath Banik", 72]; //fixed size array with multiple types
//enums
var Fruits;
(function (Fruits) {
    Fruits[Fruits["Orange"] = 0] = "Orange";
    Fruits[Fruits["Apple"] = 1] = "Apple";
    Fruits[Fruits["Mango"] = 2] = "Mango";
    Fruits[Fruits["Guava"] = 3] = "Guava";
})(Fruits || (Fruits = {}));
;
var fruitName = Fruits.Mango;
console.log(fruitName);
//any
var variable = 10;
console.log(variable);
variable = "Biswanath Banik";
console.log(variable);
variable = Fruits.Orange;
console.log(variable);
//multitype
var mtype;
mtype = true;
mtype = "Biswanath";
console.log(mtype);
