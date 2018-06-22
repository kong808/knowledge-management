/*** JS data types ***/
// docs: https://www.w3schools.com/js/js_datatypes.asp

var length = 16;                               // Number
var lastName = "Johnson";                      // String
var x = {firstName:"John", lastName:"Doe"};    // Object


//Types are dynamic in JS
var x;               // Now x is undefined
var x = 5;           // Now x is a Number
var x = "John";      // Now x is a String 


//JavaScript has only one type of numbers.
var x1 = 34.00;     // Written with decimals
var x2 = 34;        // Written without decimals 
var y = 123e5;      // 12300000
var z = 123e-5;     // 0.00123 

//BOOLEANS
var b = true;
var c = false; 
var x = 5;
var y = 5;
var z = 6;
(x == y)       // Returns true
(x == z)       // Returns false 


//ARRAYS
var cars = ["Saab", "Volvo", "BMW"];
alert(typeof cars)  //Object