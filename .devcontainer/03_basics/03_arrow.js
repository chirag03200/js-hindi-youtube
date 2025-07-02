// const user = {
//     username:"chirag " ,
//     price: 999,
//     welcomeessage : function(){
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
        
//         // this current context ko run krta h
//     }
// }
// user.welcomeessage()
// user.username ="sam";
// user.welcomeessage()

// console.log(this); // empty

// function chai(){
//     let username = "chirag"
//     console.log(this.username);// not define 
    
//     // console.log(this);
    
// }
// chai() // bhaut cheeje aayegi run krne pr

// const chai = function () { // arrow fuinction ese bnate h 
//     let username = "chirag"
//     console.log(this.username);// not define 
// }
// chai()

const chai = () => { // arrow fuinction ese bnate h 
    let username = "chirag"
    // console.log(this.username);// not define 
    console.log(this);// empty {} aayega
    
}
// chai()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,4)); // return 7

// const addTwo = (num1,num2) => num1+num2 // it's called implicit arrow function
  
// const addTwo = (num1,num2) => (num1+num2)// bracket use krenge to return keyword use nhi krna pdega

// const addTwo = (num1,num2) => {username: " chirag " } // undeife object
const addTwo = (num1,num2) => ({username: " chirag " }) // ye run ho jaayega kyoki isme () ye h 


console.log(addTwo(3,4)); // iska answer bhi 7 ayega

