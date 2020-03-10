/**
 * Day 6!
 */

/**
 * Let's See How Scope Works
 */

var myVariable = 3;

function myFunction() {
    console.log(myVariable); //Can we see myVariable in the function !?


    myFunction(); //Let's run it and  see.  Yes!! We can see GLOBALLY scoped variable inside of a function!

    var myFunctionScopeVariable = 64; //Declared in a local (function) scope.
    console.log(myFunctionScopeVariable); //Can we access it outside of the function!? We can see it if it's inside the function.

    //Function inside of a function!? Is this even possible?
    function myNestedFunction() {// (yes!)
        var myNestedFunctionVariable = " I'm very nested! ";
        console.log(myNestedFunctionVariable); //Local access works!
        console.log("Accessing funciton scope variable in nested function: " + myFunctionScopeVariable); // We can access variables from a PARENT function.  But not the reverse.

        console.log(myVariable); //Global variables / functions are accessible even all the way in here! NICE!

        //Even more nesting!?
        function myDoubleNestedFunction() {
            var doubleNestedVar = "Double nested var, here!";

            console.log(doubleNestedVar); // We can access locally, right?

            //myNestedFunction(); //Can  I run this here!? Yup! It was declared in/by a parent so we are good to go.  Calling a function inside itself causes recursion --> Unless you have a termination condition this causes endless looping.  (My browser is crashing.)
        }

        myDoubleNestedFunction(); // This works, same scopt that the function was defined!

    }
    //myDoubleNestedFunction(); //Can't reach this function here...we're outside of it's scope!

    myNestedFunction();  //Let's run and try it.

    //console.log( myFunctionScopeVariable ); Can we see it out here? Nope! The variable is scoped to its origin function, not here...

}
myFunction(); //Let's run it and see.
//console.log( myFunctionScopeVariable ); // Can we acces it outside of the function !? No! Locally scoped variables will live and die in their function

//myNestedFunction(); //Can we run the nested function!? Nope! It is not available globally if it was defined in a localized scope!

/**
 * Functions returning functions.
 */

function addNums(x, y) {
    return (Number(x) + Number(y)); //Using Number() function to make sure we don't end up concatenating!  // Sum.
}

function substractNums(x, y) { // Substraction.
    return (x - y); // Difference.
}

function multiplyNums(x, y) { // Multiplication
    return (x * y); // Product.
}

function divideNums(x, y) { // Division.
    return (x / y); // Quotient.
}
function myMath(operation, x, y) {
    switch (operation) {
        case "add":
            return addNums(x, y); //"Return" kills the function, so breaks are optional here.
        case "substract":
            return substractNums(x, y);
        case "multiply":
            return multiplyNums(x, y);
        case "divide":
            return divideNums(x, y);
        default:
            return "Invalid operation. ";

    }
}

