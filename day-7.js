
/**
 * Let's see what some of our newer array methods are...
 */
// .find() method:

 var myArray = ["Hello, World!", 2, 3, true, 5, null, 38 ];
var myValue = myArray.find( function (element) {return element > 4});
console.log(myValue);

var isMyStringInside = myArray.find( function ( element ) { return element === "Hello, World!"; } );
console.log( isMyStringInside ); //We would get the element.

//Find is helpful for checking if an element exists in an array!
var isMyStringInside = myArray.find( function ( element ) { return element === "Goodbye, Everyone "; } );
console.log( isMyStringInside ); // Not found

/**
 * 
 */