//Retorna un numero entero entre un minimo y maximo incluidos.
Math.randomNum = function(min, max){
	return Math.floor((Math.random() * max) + min);
}
//sum recibe un array de numeros nums[1,45,102] y devuelve su suma
Math.sum = function (nums){
	var suma = 0;
	for (var i = 0; i<nums.length; i++){
		suma += nums[i]
	}
	return suma;
}

Math.rest= function(nums){}

Math.multiply = function(nums){}

Math.avg = function(nums){}

/******************* TESTS ***********************/
//Tests de la API Math
function tests(){
	alert("Test de Math.sum(nums[]): "+Math.sum([2,4]))
	alert(Math.PI)
	alert(typeof document)
			alert( Window.toString())
	alert(typeof Math.PI)
	alert("Test de Math.randomNum(min, max): "+Math.randomNum(1,10))
}
//tests()

/********* API **********/
/*
*
* Math Obj JS - docs: https://www.w3schools.com/js/js_math.asp
* for more advance Maths (algebra, complex, etc) see: http://mathjs.org/docs/
* ciencias: http://127.0.0.1:8087/matematica.html
*
/
/********* FUNCTIONS: 
abs(x) 	Returns the absolute value of x
acos(x) 	Returns the arccosine of x, in radians
asin(x) 	Returns the arcsine of x, in radians
atan(x) 	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
atan2(y, x) 	Returns the arctangent of the quotient of its arguments
cos(x) 	Returns the cosine of x (x is in radians)
sin(x) 	Returns the sine of x (x is in radians)
tan(x) 	Returns the tangent of an angle
exp(x) 	Returns the value of E**x
log(x) 	Returns the natural logarithm (base E) of x
pow(x, y) 	Returns the value of x to the power of y
sqrt(x) 	Returns the square root of x

round(x) 	Returns the value of x rounded to its nearest integer
ceil(x) 	Returns the value of x rounded up to its nearest integer
floor(x) 	Returns the value of x rounded down to its nearest integer

max(x, y, z, ..., n) 	Returns the number with the highest value
min(x, y, z, ..., n) 	Returns the number with the lowest value

random() 	Returns a random number between 0 and 1
----------------------------------------
Propietarias: 
randomNum(min, max)
sum(nums)
rest(nums)
multiply(nums)
avg(nums)

/********** CONSTANTS:
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E 

*/
/********* API **********/