
/**
 * Let's see what some of our newer array methods are...
 */
// .find() method:

var myArray = ["Hello, World!", 2, 3, true, 5, null, 38];
var myValue = myArray.find(function (element) { return element > 4 });
console.log(myValue);

var isMyStringInside = myArray.find(function (element) { return element === "Hello, World!"; });
console.log(isMyStringInside); //We would get the element.

//Find is helpful for checking if an element exists in an array!
var isMyStringInside = myArray.find(function (element) { return element === "Goodbye, Everyone "; });
console.log(isMyStringInside); // Not found

/**
 * .findIndex()
 */
var findAnIndex = myArray.findIndex(function (element) { return element === 2; });
console.log(findAnIndex); // This time, it returned the value's INDEX.

/**
 * .entries()
 */
var pairing = myArray.entries();
console.log(pairing); // Returns an iterator.
console.log(pairing.next().value);// We can keep bumping to the next item, getting a nice key/value array to let ys know what's inside.
console.log(pairing.next().value);
console.log(pairing.next().value);
console.log(pairing.next().value);
console.log(pairing.next().value);
console.log(pairing.next().value);
console.log(pairing.next().value);

/**
 * .from() method
 */

var fromArray = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
console.log(fromArray); // Oh geeze, that's a 26-element array now.
var fromArray2 = Array.from("Hello, World!");
console.log(fromArray2); // Even spaces and special characters will captured as elements!

/**
 * .filter() method:
 */

var filtered = myArray.filter(function (element) { return element > 4; });
console.log(filtered); //All matches returned ( 5 and 38 )

/**
 * .reduce() method:
 * We can add on to a value, returns only a single.
 */
var reduceResult = myArray.reduce(function (accumulator, currentVal) {
    return accumulator + currentVal;
});
console.log(reduceResult);// Because we have strings in here, they are getting concatenated

console.log([1, 2, 3, 4].reduce(function (a, v) { return a + v; })); // Because we have numbers, they are being added mathmatically.

/**
 * Let and Const
 */
var x = 3; // Standard variable declaration. Function-scoped.
let y = 7; // Let is block-scoped.
const z = 36; // Const is block-scoped, but reassigment is not allowed.

//z=16; Not allowed! Const must remain with its original assignment.
console.log(z);

y = 13; // Allowed! var and let allow re-assignment.
console.log(y);

for (var myVar = 0; myVar < 10; myVar++) {
    console.log("For loop iteration...");
}
for (let myNewVar = 0; myNewVar < 10; myNewVar++) {//curly braces means that let and Const should be listening to this, and won't happen outside of them.
    console.log("For loop iteration...");
    console.log(" myNewVar = " + myNewVar);
}
//console.log( " myNewVar = " +myNewVar ); // We can't access it outside of the block.

/**
 * Const can't be re-assigned.. but it's insides can be manipulated
 */

const myObj = { //as long as the variable myObj isn't being re-assigned (myObj=) then we CAN update, manipulate
    name: "Henry",
    age: 18
}
myObj.name = "Sandy"; //Can we update PROPERTIES or array ELEMENTS inside of a const-declared variable?
myObj.hobbies = [];
myObj.hobbies.push("Mountain Climbing");
console.log(myObj);

/**
 * Let's shake things up with: FUNCTIONS...
 * New syntax
 */
//Classic function declaration...
function myFunction(a, b) {
    return Number(a) + Number(b);
}
console.log(myFunction(3, 7));

//ESC style:
myFunction = (a, b) => Number(a) + Number(b);
console.log(myFunction(3, 8));

//Bigger Function
myOtherFunction = (a, b) => {
    const myAnswer = Number(a) + Number(b);
    return myAnswer;
}
console.log(myOtherFunction(34, 6));

/**
 * Function default parameter values.
 */
// We can set defaults, to prevent errors in case nothing gets passied in for a parameter
addNums = (x = 0, y = 0) => x + y;

console.log(addNums());// No arguements! But our default values kick in!

/**
 * Rest parameter.
 */
//Rest parameter MUST BE THE LAST PARAMETER.
findHighNum = (minNum = 0, ...args) => { //args will capture any number of arguements that we pass!
    minNum = Number(minNum);
    if (minNum === NaN) minNum = 0;
    const highNums = args.filter((element) => element > minNum);
    //console.log( args ); //It can be called by the name we had in between our parenthesis.
    return highNums;
}

console.log(findHighNum(5, 2, 20, 50, 3, 0, 10, 24, -508));

//Getting the sum of ALL numbers passed in!
AddAllNums = (...nums) => nums.reduce((a, v) => a + v);
console.log(AddAllNums(64, 6, 10));

/**
 * Template Literals
 */

const helloVar = "Hello, world!";
const sampleName = "Sam";

const myNewString = `Hey there, name is ${sampleName}; I'd like to give you a big: "${helloVar}"!!`;  //The syntax for template literals is: ${variableName}
//NOTE: This only works inside of backticks.  But is super useful.  It save us from extra concatenation.
console.log(myNewString);

/**
 * Spread Operator
 * Don't get this confused with the rest parameter.  Both are three dots
 * Remember that rest parameter is always in PARAMETER area of a functions, nowhere else.  Spread is used ANYWHERE else, basically.
 */
const newArray = ["Hello", ",", "", "World", "!"];
console.log(newArray);
console.log(...newArray);//Brought the values in the array together as one (space-separated) string. Or did it?

// Spread operator separates into separate values.
const aBunchofNums = [5, 10, 36, 58];
console.log(AddAllNums(5, 10, 36, 58));
//console.log( AddAllNums( ... aBunchOfNums ) ); //Spreading an argument.

/**
 * String Methods!
 * 
 * .search() Method:
 * 
 * Regex Learning Tool: https://regexone.com/
 */

const myTestString = "Greeting, Programs!";
console.log(myTestString.search(/ting/i)); //i means case insensitive ( so it doesn't matter if you type capitals)Regex match - returns the substring position.  Ting is 4.

/**
 * .replace() Method:
 */

const myReplacedString = myTestString.replace(/Programs/, "World");
console.log(myReplacedString);

/**
 * Blocks:
 */
//Unnamed block. We can use this to contain otherwise-global const and let variables.
{
    const myBlockNestedVar = 38;
}
//console.log( myBlockedNestedVar );
//We can name blocks if we want.
myOrganizeName: {
    //We can organize some code in here, and control scope of let/const.
    let myBlockNestedVar = 55; // we used the same name as in our unnamed block.  That's okay, it ws born in a differently scoped block.
    myBlockNestedVar++;
    console.log(myBlockNestedVar);
}
//console.log( myFinalResult );

/** 
 * Classes.
 * CHECK OUR IMPORT< THAT"S HOW WE"RE ACCESSING THIS.
 *
 */

class Movie {
    constructor(name, genre, year) {
        this.name = name;
        this.genre = genre;
        this.year = year;
    }
    get name() { // How we retrieve the property. A GETTER
        return this.name;
    }
    set name( newName ) { // How we store a new property value. A SETTER
        if (typeof newName === "string") {
            this.name = name;
        } else {
            this.name = name.toString();
        }
        return this.name;
    }
    showPoster() { // This is a method! We can name them as we'd like.
        const info = `
             MOVIE INFO 
            ===========
            Name: ${this.name}
            Genre: ${this.genre}
            Year: ${this.year}
      `;
        return info;
    }
}

const tron = new Movie("Disney's Tron", "Adventure", 1982);
const dragonheart = new Movie("Dragonheart", "Medival Fantasy", 1996);
const godfather = new Movie("Godfather II", "Action/Thiller", 1974);

console.log(tron);
console.log(dragonheart);
console.log(godfather);
