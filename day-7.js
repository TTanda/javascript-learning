
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
 * .findIndex()
 */
var findAnIndex = myArray.findIndex( function (element ){ return element === 2; } );
console.log( findAnIndex ); // This time, it returned the value's INDEX.

/**
 * .entries()
 */
var pairing = myArray.entries();
console.log( pairing ); // Returns an iterator.
console.log( pairing.next().value );// We can keep bumping to the next item, getting a nice key/value array to let ys know what's inside.
console.log( pairing.next().value );
console.log( pairing.next().value );
console.log( pairing.next().value );
console.log( pairing.next().value );
console.log( pairing.next().value );
console.log( pairing.next().value );

/**
 * .from() method
 */

 var fromArray = Array.from( "ABCDEFGHIJKLMNOPQRSTUVWXYZ" );
 console.log( fromArray ); // Oh geeze, that's a 26-element array now.
 var fromArray2 = Array.from( "Hello, World!");
 console.log( fromArray2 ); // Even spaces and special characters will captured as elements!

 /**
  * .filter() method:
  */

  var filtered = myArray.filter( function ( element ) { return element > 4; } );
  console.log( filtered ); //All matches returned ( 5 and 38 )

  /**
   * .reduce() method:
   * We can add on to a value, returns only a single.
   */
  var reduceResult = myArray.reduce( function ( accumulator, currentVal ) {
      return accumulator + currentVal;
  } );
  console.log( reduceResult );// Because we have strings in here, they are getting concatenated

  console.log([1, 2, 3, 4 ].reduce( function ( a, v ) { return a + v; } ) ); // Because we have numbers, they are being added mathmatically.

  /**
   * Let and Const
   */
  var x = 3; // Standard variable declaration. Function-scoped.
  let y = 7; // Let is block-scoped.
  const z = 36; // Const is block-scoped, but reassigment is not allowed.

  //z=16; Not allowed! Const must remain with its original assignment.
  console.log( z );

  y = 13; // Allowed! var and let allow re-assignment.
  console.log( y );

  for ( var myVar = 0; myVar < 10; myVar ++ ) {
      console.log( "For loop iteration..." );
  }
  for ( let myNewVar = 0; myNewVar < 10; myNewVar ++ ) {//curly braces means that let and Const should be listening to this, and won't happen outside of them.
    console.log( "For loop iteration..." );
    console.log( " myNewVar = " +myNewVar );
}
//console.log( " myNewVar = " +myNewVar ); // We can't access it outside of the block.