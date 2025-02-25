// function sayMyName() {
//     console.log("C");
//     console.log("H");
//     console.log("I");
//     console.log("R");
//     console.log("A");
//     console.log("G");

// }

//sayMyName()

// function addTwoNumber(number1,number2) { //number1 or 2 are parameters
//     console.log(number1+number2);
// }

// addTwoNumber(3,4)//if arguments nhi denge to Nan aayega means not a number
// addTwoNumber(3,null)//print 3 only

// function addTwoNumber(number1,number2) { //number1 or 2 are parameters
//     let result = number1 + number2
//     return result
// }

// const result = addTwoNumber(3,4)
// console.log("Result :", result);

// function loginUserMessage(username){ // = yha pass kr denge to if block me jaayega hi nhi code
//     if(username === undefined){//!username ese bhi likh skte h
//         console.log("please enter a username");
//         return 
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage());// print hoga chirag just logged in 

//for shopping cart

function calculateCarPrice(...num1) { //... called rest operator or spread operator and yha as a rest operstor use kiya h araay bnega
    return num1

}
//console.log(calculateCarPrice(200,400,500,2000));

const user = {
    username: "chirag",
    price: 1999
}

function handelObject(anyobject){
    console.log((`username is ${anyobject.username} and price is ${anyobject.price}`));  
}
handelObject( {
    username:"sam",
    price: 272,
})

const myNewArray = [200,4000,5000,340]

function returnSecondValue(getArray) {
    return getArray[2]
}
console.log(returnSecondValue(myNewArray));
