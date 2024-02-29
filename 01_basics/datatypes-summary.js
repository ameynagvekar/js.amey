//premitive

// 7 types : String , number , boolean , null , undefined , Symbol, Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsidetemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 56468464564646546554n
console.log(typeof (bigNumber));

//Reference type(non premitive)

//array, objects, functions
const heros = ["Chaddiman", "Superman", "Batman"]

let obj = {
    name: "amey",
    age: 22,
}

const myfucntion = function () {
    console.log("Hellow world")
}

console.log()

// What is typeof?

/*The typeof operator in JavaScript is used to determine the 
data type of a given value (variable, function, object, etc.).
It returns a string describing the type.*/

/*Possible Return Values

Numbers: "number"
Strings: "string"
Booleans: "boolean"
Symbols: "symbol"
Functions: "function"
Objects: "object"
Arrays: "object" (Arrays are a special type of object)
null: "object" (This is a historical peculiarity of JavaScript)
undefined: "undefined"*/

// ++++++++++++++++++++++++++++



