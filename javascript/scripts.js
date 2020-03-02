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