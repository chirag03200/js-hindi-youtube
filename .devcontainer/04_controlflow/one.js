// if statment

// if(true) { // ye run hoga true or false will be conditions
// }
// if(false) { // ye run nhi hoga   
// }

// Comparison attributes == <,>,<=,>=,==,!=,===(it's used for check equallity of different data types) 
// ,!==()

// if(2== "2"){
//     console.log("executed");   
// }

// const tempreature = 41;
// if(tempreature === 41) { // only  isme ye if chlega or sbme else
//     console.log("less than 50");
// } else{
//     console.log("not less than 50");
// }

const score = 200

// if(score > 100){
//     // const power ="fly" // const use krne pr andr vaala hi run hoga
//     var power ='fly' //but var use krne pr dono run honge so use let or const
//     console.log(`user power:${power}`);
// }

// console.log(`user power:${power}`);

//shorthand notaion

const balance = 1000

// if(balance > 500) console.log("test"),
// console.log("test2"); // but ye acha nhi h so don't use

// if(balance < 500) {
//     console.log("less than 500");
// } else if(balance <  900) {
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");   
// }

// use on real life

const userLoggedIn = true
const debitCard= true
const loggedInFromGoogle = true
const loggedInFromEmail= true

if(userLoggedIn && debitCard) { // both condition true honi chayiye
    console.log("allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){ //ek hi true ho to chl jaayegi
    console.log("user is logged in");
}