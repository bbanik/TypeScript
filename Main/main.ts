export{}
//Variable Declarations

let x = 5;
let y = 15;
//let x= 6; // cannot redeclare blok scoped variable

//const title; // 'const' declarations must be initialized
const title = "TypeScript Demo";
//title = "TypeScript demo title"; //cannot assign to 'title' because it is a constant or a read-only property

// Data Types

//let firstProgram = true;
//let firstProgram = "True";
let firstProgram: boolean = true;
//let firstProgram: boolean = "True"; // '"True"' is not assignable to type boolean

let firstName: string = "Biswanath";
let lastName: string = "Banik";

let fullName: string = firstName + lastName; 
console.log(fullName);

let sentence: string = `My Name is ${fullName}`; // vairable to be used within backticks
console.log(sentence);

//Array

let array1: number[] = [10, 20, 30];
let array2: Array<string> = ["Biswanath","Banik"];

//Tuple

let person: [string, number] = ["Biswanath Banik",72]; //fixed size array with multiple types

//enums

enum Fruits {Orange, Apple, Mango, Guava};
let fruitName: Fruits = Fruits.Mango;
console.log(fruitName);

//any

let variable: any = 10;
console.log(variable);
variable = "Biswanath Banik";
console.log(variable);
variable = Fruits.Orange;
console.log(variable);

//Union 

let mtype: boolean|string;
mtype = true;
mtype = "Multitype";
console.log(mtype);
