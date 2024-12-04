// primitive datatypes

//7 types : string, number, boolean, null, undefined, symbol, BigInt

const score= 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id =Symbol('123')
const annotherId = Symbol('123')

console.log(id === annotherId); // ans is false

const bigNumber = 234565643245678543567n // n is represent its bigInt number

//Refrence typr or non primitive

// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = { 
    name: "chirag",
    age: 22,
}

const myFunction =function(){
    console.log("hello world");
    
}