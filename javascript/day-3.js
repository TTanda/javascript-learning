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
//Array
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

 // Creating elements for a webpage. (Adding to the DOM!)
 
// Create a datalist.
var myDataList =  document.createElement( "DL"); // Won't show yet! We didn't tell it where to go.
// Let's loop through the array so we don't have to type out each item

// for ( ASSIGNMENT; TERMINATION CONDITION; ITERATION)
for (var i=0; i < myArrayofDataTypes.length; i++ ) 
{ //Create datalist title.
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
`;
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

    //Exclamation means NOT.  So it fires on the OPPOSITE.
   this.className += " big-text" ; // Concatenating a new class! 
    // Remember, you must have a space between classes when assigning multiple.

 } );

/**
 *  Let's make a function.
 */
//Function keyword, followed by the function name (and parameters if any are need.)
 function addTwoNumbers (x,y ) {
 
    x = Number(x); // Enforce data-type (number)
    y = Number(y); // Enforce data-type (number)
    return (x = y ); // Add the two together.
 }


// Return current date as a string (2020.03.06)
 function currentDayString () {
 
     // New date object.
     var date = new Date();
      //Declare a string we can store date info in.
     var dateString = "";
     dateString += date.getFullYear(); // Full four digit year
     dateString += "."; // Period for formatting
     dateString += ( date.getMonth () + 1 ); //Month of the year  - plus one is because it starts at zero
     dateString += "."; // Period for formatting
     dateString += ( date.getDay() + 1 ); // Current day of the week  - plus one is because it starts at zero
     return dateString;
 
 }
 //Output to console.
 console.log ( "The current date is: \r\n" + currentDayString() ); // \r\n is return/newline - this will now output on TWO lines in your console

// check for euqivalency  (type - agnostic)
 console.log ( 1 == true); //True
 console.log ( "Hello, World!" == true );//False
 console.log ( -137 == true ); //False
 console.log ( "test" == "test" ); //True
 console.log ( 36 == "36" ); //True
 console.log ( 0 == false ); //True


 //check if identical ( value comparison including type.)
 console.log( 1 === true );//False
 console.log ( "Hello, World!" === true );//False
 console.log ( -137 === true ); //False
 console.log ( "test" === "test" ); //True
 console.log ( 36 === "36" ); //False
 console.log ( 0 === false ); //False 

 /**
  * Hamburger Menu
  */

  // Let's grab our menu...
 var myNav = document.querySelector( "nav "); //query of item

 // And our menu button...
 var myNavButton = document.querySelector( ".menu-button" ); //query of class item

// Let's listen for a click on this.
 myNavButton.addEventListener( "click", function (event ) {
  //When clicked, add/remvoe the  "nav-open" class (in HTML.)
    myNav.classList.toggle( "nav-open" );


 });