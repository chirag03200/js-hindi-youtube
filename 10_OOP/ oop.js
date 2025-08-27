const user ={
    username : "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`); // agar khudka use krna h inside to this use kro 
        console.log(this) // memory ke andr ki values dega
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username; // this vaala side variables h
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greetings = function() {
        console.log(`welcome ${this.username}`);
    }

    return this // is se frk nhi pdhta h 
}

const userOne = new User("hitesh" ,12 , true) // override vaali problem ko htane ke liye new keyword ka use krte h 
const userTwo = new User("chirag" ,11 , true)
//console.log(userOne) (without new keyword )yha user Two ki value print ho jaayegi becuase vo overrirde ho jayegi but it's not good.

console.log(userOne);
console.log(userTwo);

