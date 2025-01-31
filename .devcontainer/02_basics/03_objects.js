//singleton made by constructor only
//object.creat

//object literals


const mySym = Symbol ("key1")


const JsUser={
    name: "CHIRAG",
    "full name" : "Chirag Jain",//this is access by only 2nd method ot by dot
    //mySym : "mykey1",//iska datatype yha string rhega
    [mySym]: "mykey1",//iska datatype symbol hoga 
    age:18,
    location:"jaipur",
    email:"jainc3620gmail.com",
    isLoggedIn:false,
    lastLoginDays: ["monday" , "tuesday"]
}
 
//console.log(JsUser.email)//access the array by dot
//console.log(JsUser["email"])//access the array also this method

//console.log(JsUser["full name"]);//acess  by only this method not by dot
//console.log(JsUser[mySym]);

JsUser.email ="chirag123@gmail.com"//change the email
//Object.freeze(JsUser)//not change any value inside the object by freeze
JsUser.email ="cj2322@gmail.com"//not changed
//console.log(JsUser);

//ADDING A FUNCTION

JsUser.greetings = function(){
    console.log("hello js user");
}

JsUser.greetingTwo = function(){
    console.log("hello js user" ,${this.name});//this kaa use krte h and direct change kr deteh value ko 

}

console.log(JsUser.greetings());//undefined  and is not a function because of freeze after unfreeze the hello js user will be print
console.log(JsUser.greetingTwo());
