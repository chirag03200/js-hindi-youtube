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


// *****************************//
//  Memory
// two types
//1. stack (Primitive) original value ki copy milti h 
//2. heap (Non primitive) direct refrences milte h 

// example of Stack
let myYoutube = "chirag.com"

let anothername = myYoutube
anothername = "chirag2.com"

console.log(myYoutube);
console.log(anothername);
  
// example of Heap 
let userOne = {
    email : "user@gool.com" ,
    upi : "user@ybl"
}
 let userTwo = userOne;
 userTwo.email = "chirag@google .com"

console.log(userOne.email);
console.log(userTwo.email);
