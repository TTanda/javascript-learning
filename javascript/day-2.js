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
//
switch (mathOperation) {
    case "add":
        console.log ( 5+ 5 );
        break; //this causes it to execute until it gets to a break.  If you take it away, the operation will continue.  It starts at first matching value, then continues until break is reached.
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
/**
 * Let's manipulate things in the DOM! (Document Object Model)
 */
var myParagraph = document.getElementById ("my-paragraph");
console.log (myParagraph);

myParagraph.textContent = "Hello, world! ";
myParagraph.textContent += " Also, hey how are ya'?";
//Create a BRAND NEW ELEMENT.  It won't show up yet, but we can start manipulating it before we inject it into our webpage!
var newParagraph = document.createElement("p");
newParagraph.textContent = "This paragraph was created completely in JavaScript! Wowie! Zounds! Gadzooks!";//Populate your element
//Add your element to the document body!
document.body.appendChild ( newParagraph );

var otherNewParagraph = document.createElement ("p");

otherNewParagraph.textContent = " Second new paragraph.";
otherNewParagraph.style.color = "darkgray";

var myFirstLink = document.createElement ("A"); //  a link
myFirstLink.textContent = "Click Here!";
myFirstLink.href = "./index.html";
myFirstLink.title = "Return to Homepage.";
myFirstLink.className  = "my-link"
//We're adding the link INTO our brand new paragraph BEFORE it even goes to the browser!
otherNewParagraph.appendChild (myFirstLink );

// Now, our paragraph with TEXT and a LINK both, will be added to the body!
document.body.appendChild (otherNewParagraph );
//Let's try query selector.
var targetLink = document.querySelector (".my-link");
targetLink.textContent = "Go Back Home";
/**
 * FORMS!
 */
var calculatorForm = document.getElementById ("calculator");

calculatorForm.addEventListener( "submit", function (event) {
    event.preventDefault(); //STOP the submission

//Collect the form fields (DOM)
var operatorInput = document.getElementById ("operator");
var num1Input = document.getElementById ("num1");
var num2Input = document.getElementById ("num2");

// Retrieve the values from the form fields
var operatorValue = operatorInput.value;
var num1Value = num1Input.value;
var num2Value = num2Input.value;
//this means when submit happens, then the function of the calculator happens

var result = 0;
//Let's run our math!
switch (operatorValue ) {
    case "add":
        result = +num1Value + +num2Value;
        break; //this causes it to execute until it gets to a break.  If you take it away, the operation will continue.  It starts at first matching value, then continues until break is reached.
    case "subtract":
        result = num1Value - num2Value;
        break;
    case "divide": 
        result = num1Value / num2Value;
        break;
    case "multiply":
        result = num1Value * num2Value;
        break;
}//end of switch.

var resultElement = document.getElementById("result");
resultElement.textContent = result; //show the result in our element.

});//end of eventListener.