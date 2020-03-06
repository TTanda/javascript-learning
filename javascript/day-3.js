/**
 * Let's try JavaScript, again!
 * Multi-line comment.
 */
// Single line, comment!

//Basic assignment:
var myVariable = "38.9587"; //Variable is set as a string.
console.log ( myVariable + 5); //one of these is a string, so it is now concatenating

myVariable = parseFloat( myVariable ); //floating point number, decimal is maintained.
console.log(myVariable );   //It is now numeric!

myVariable = parseInt( myVariable ); //Converted to integer, decimal removed.
console.log( myVariable ); //38

myVariable = Number( myVariable ); //Converted to any number type it can.
console.log( myVariable); //No change here.

myVariable = myVariable + 5; //Addition. Beware "+" as it can add, or conatentate, depending on if any of the operands are strings!
console.log( myVariable );

myVariable = myVariable.toString();  //Convert back to a string.
console.log( myVariable );

/**
 * Other types?
 */
