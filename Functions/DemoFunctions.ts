export{}
function multiply(num1: number, num2: number): number{
    let result: number = num1 * num2;
    return result;
}
console.log(multiply(2, 10));

//optional parameters

function addition(num1: number, num2?: number): number{
    if(num2 != undefined)
        return num1 + num2;
    else
        return num1;
}

console.log(addition(5, 5));
console.log(addition(15));

//Rest parameters

function addNumbers(...nums:number[]) {  
    var i;   
    var sum:number = 0; 
    
    for(i = 0;i<nums.length;i++) { 
       sum = sum + nums[i]; 
    } 
    console.log("sum of the numbers",sum) 
 } 
 addNumbers(1,2,3) 
 addNumbers(10,10,10,10,10)

//default parameter

function subtraction(num1: number, num2: number = 1): number{
    return num1 - num2;
}

console.log(subtraction(5, 5));
console.log(subtraction(10));

//Anonymous function

var res = function(a:number,b:number) { 
    return a*b;  
 }; 
 console.log(res(12,2))

 //function Constructor
 var myFunction = new Function("a", "b", "return a * b"); 
var x = myFunction(4, 3); 
console.log(x);

//Anonymous recursive function/ self invoking function 

(function () { 
    var x = "Hello!!";   
    console.log(x)     
 })() 

 //Lambda function

 var foo = (x:number)=>10 + x 
console.log(foo(100));

//function overloading

function disp(s1:string):void; 
function disp(n1:number,s1:string):void; 

function disp(x:any,y?:any):void { 
   console.log(x); 
   console.log(y); 
} 
disp("abc") 
disp(1,"xyz");