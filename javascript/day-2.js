/* day2.js*/

var myNumber = "54.6"; //string
console.log (myNumber + 6); //Concatenation occurs

myNumber = parseInt ( myNumber ); //Now it is an integer

console.log ( myNumber + 6 ); // Addition occurs

myNumber = parseFloat( myNumber ); // Now it's a float 

console.log ( myNumber + 6 ); // Addition occurs

myNumber =Number( myNumber ); //Now it is a 64bit floating point numeric. The only actual number in JavaScript

console.log( myNumber + 6); // Addition occurs

/**
 * Converting numbers to strings
 */
myNumber = myNumber.toString(); //The toString() method will turn a number into a string

console.log( myNumber + 6 ); //Concatenation again
/**
 * Watch out, Auto-conversion can be interesting. Always check your bases
 */
var myString = "Hello World!";
console.log ("Test1:");
console.log ("Type is: "+(typeof myString) );
console.log ( myString);

myString = 5;
console.log ("Test 2:");
console.log ("Type is: "+(typeof myString) );
console.log ( myString);

myString = myString*3;
console.log ("Test 3:");
console.log ("Type is: "+(typeof myString) );
console.log ( myString);

myString = "Updated string.";
console.log ( "Test 4:");
console.log ("Type is: "+(typeof myString) );
console.log (myString);

myString = {"another" : "string test!?"};
console.log ("Test 5:");
console.log ("Type is: "+(typeof myString) );
console.log ( myString);
/**
 * SWITCH (CASE) statements
 */
var mathOperation = "add";

switch (mathOperation) {
    case "add":
        console.log ( 5+ 5 );
        break;
    case "subtract":
        console.log ( 5 - 5 );
        break;
    case "divide": 
        console.log ( 5/5);
        break;
    case "multiply":
        console.log (5*5);
        break;
    default:
        console.log ("No operator provided.");
        break;
    
}