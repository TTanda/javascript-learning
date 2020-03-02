//single line comment
/*
This type of comment can be many lines
*/

var myInteger = 34;  //Camel-casing is common for JavaScript //
// We can output to our console via the console.log method//
console.log(myInteger * 3);
if ((myInteger === 7) || (myInteger === 34)) {
    console.log("Number is ... 7 or 34!?"); (myInteger > 5)
} else if ((myInteger === 6) && (myInteger > 5)) {
    console.log("Number is 6!!!");
} else if (myInteger > 5) {
    console.log("Number is greater than 5. ");
} else if (myInteger < 5) {
    console.log("Number is less than 5. ");
} else {
    console.log("Number is 5!?");
}
// Datatypes:
var myString = "Hello world!";
myInteger = 64; //declared up above, this just changes the value //
var myFloat = 12.768; //Decimal number,
var myBoolean ="true"; // True or false
var uhOh = undefined; //no value assigned - don't use keywords unless you have a very specific need for them//
var myNull = null; // The value or variable doesn't exist, is null  //
var myArray = [myString, myInteger, myFloat, uhOh, myNull]; //Array!

//Let's try a loop! Remember : i ++ is the same as : i = i +1;//
for ( var i = 0; i <5; i ++ ) {
    console.log ("Value of position "+i+", in myArray, is: "+myArray[i] ); //value of position, then the variable in that position//
}
// A basic function
function myFunction() { 
    console.log ( "My function has run")
}
// We have to call upon it, in order to run it, don't forget!
myFunction();

var inputValue = prompt("Enter your name "); {
 if (inputValue !=null) {
     console.log ( ":(" + inputValue + ":)" );
 } 
}
//If statement...
var a;
var b;
if ( a === b) {
    console.log( "a is identical to b.");
} else {
    console.log ( "a and b are not identical");
}
//Converting to ternary....
/* Syntax is 
*condition ? logic for true : logic for False
*/
(a===b) ? console.log ("a is identical to b.") : console.log( "a and b are not identical"); 

// A while loop takes a condition.
var i = 0;
while (i <6 ) {
    console.log( "While loop:" +i);
    i++; // Make sure the condition will eventually be FALSE, or the loop will go on FOREVER
}

//Foreach ?! It is a method of the array datatype
myArray.forEach( function(arrayItem) {
    console.log ( "Array item is " +arrayItem);

} );//closing paranthesis is from function opening - this is called an "anonymous array"

/*
*Let's give objects a shot!
*/
var myObject = {
    name:      "Bob",
    age:        32,
    hobbies:    [
            "sports",
            "movies",
            "hiking"
    ]
}
 console.log("Hello! My name is" + myObject.name+". I am " +myObject.age+" years old, and one of my hobbies is:" +myObject.hobbies[1]);