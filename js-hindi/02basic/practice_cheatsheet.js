var a = 3
var a = 4
console.log(a);
// notes: in `" == "${only check for the value} & " ==="${checks for the value + type}`
let A = 5;
let B = '5';
console.log(A == B);
console.log(A === B);

// var n = 2;
// const myfunc = function square(num){
//     var ans = num * num;
//     return ans;
// }
// var square2 = square(n);
// console.log(square2);


const obj = {
    "1" : "a",
     1   : "b",
     [1] : "c"
};
console.log(obj["1"]);

const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;

const string4 = new String ("A string object");

const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"
/*
 String primitives and String objects also give different results when using eval(). Primitives passed to eval are treated as source code; String objects are treated as all other objects are, by returning the object.
 */
const s1 = "3 + 5"; // creates a string primitive
const s2 = new String("3 + 5"); // creates a String object
console.log(eval(s1)); // returns the number 8
console.log(eval(s2)); // returns the string "3 + 5"

console.log(eval(s2.valueOf()));
// string constructors
const a1 = new String(`Hello World!`);//a1 === "Hello World!"
const b1 = String(`Hello World!`);
a1 instanceof String;
b1 instanceof String;
console.log(typeof a1);
console.log(typeof b1);

const sym = Symbol("example");
String(sym); // "Symbol(example)"
console.log(typeof sym);




