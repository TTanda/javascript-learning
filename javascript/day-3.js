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
var myArrayofDataTypes = [
    //Booleans:
    true,
    false,
    //Null:
    null,
    // Number (float/integer):
    34,
    168.793,
    // String:
    "Hello, World !",
    //Value not defined:
    undefined,
    //Not a number:
    NaN,
    // An array in array:
    [1,2,3,4,5]
];

/**
 * Creating elements for a webpage. (Adding to the DOM!)
 */
// Create a datalist.
var myDataList =  document.createElement( "DL"); // Won't show yet! We didn't tell it where to go.
// Let's loop through the array so we don't have to type out each item

// for ( ASSIGNMENT; TERMINATION CONDITION; ITERATION)
for (var i=0; i < myArrayofDataTypes.length; i++ ) {
    //Create datalist title.
var dataListTitle = document.createElement( "DT" );
dataListTitle.textContent = typeof myArrayofDataTypes[i]; // Output the datatype.

// Create datalist data.
var dataListData = document.createElement( "DD");
dataListData.textContent = myArrayofDataTypes[i];

// Add our new elements to our datalist. DOM manipulation.
myDataList.appendChild( dataListTitle );
myDataList.appendChild( dataListData );

}

var myHeadingText = "Our Data-Type Test:";
// This is adding HTML to the end of our body.
document.body.innerHTML += ` <!-- Back ticks are used in JS for multi-line strings. -->
 <h2>
   `+myHeadingText/*Concatenating Strings!*/+`
  </h2>
`
// Add ALL of that to the body, and now you should be able to see it!
document.body.appendChild ( myDataList );

/*
*Collecting elements
*/

var myheading = document.getElementById( "myHeading");
myHeading.title = "This is a heading."; //Tooltip attribute
//myHeading.style.color = "darkgray"; // PLEASE avoid using inline styles .... this is the CSS file's job!

myHeading.className = "gray-text"; // Uses classes instead1

/**
 * Events!
 */

 myHeading.addEventListener( "mouseover"/* Here we say which event we are targeting. */, function ( event/* We can capture infor about the event*/ ) {
     this.className = "salmon-text"; /* In an event, the "this"keyword represents our element (myHeading). */
 } );
     myHeading.addEventListener( "mouseleave"/* Here we say which event we are targeting. */, function ( event/* We can capture infor about the event*/ ) {
        this.className = "indigo-text"; /* In an event, the "this"keyword represents our element (myHeading). */
 } );

 myHeading.addEventListener( "click", function ( event ) {
     var bigClass = "big-text";
     if ( !this.className.includes( bigClass) )  // Good to do checks like this so we don't have 500 of the same class on here is the user keeps clicking.
     
    { //Exclamation means NOT.  So it fires on the OPPOSITE.
    this.className += " big-text" ; // Concatenating a new class! 
    // Remember, you must have a space between classes when assigning multiple.
    }
} );
