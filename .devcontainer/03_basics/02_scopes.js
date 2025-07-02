// // var c= 300
// let a= 300

// if (true) {
//     let a=10
//   const b=20
//     // var c=30
//     console.log("INNER :", a);// inner me 10 aayega
// } // if ke andr block scope h or bahar h global scope

// // console.log(a);
// // console.log(b);
// // console.log(c);// ye print ho jaayega

// function one(){
//     const username ="chirag"

//     function two(){
//         const website="youtube"
//         console.log(username);
//     }
//     console.log(website);// ye run nhi hoga kyoki define hi glt trike se huwa h

//     two()
    
// }

// one()

if (true){
    const username ="chirag"
    if(username==="chirag"){
        const website ="youtube"
        // console.log(username + website);   // ye print hoga
    }
    // console.log(website);//it's not accesscible 
}

// console.log(username); // ye bhi nhi hoga access

// +++++++++++++++++++++++++ INTERESTING +++++++++++++++++++++++
console.log(addone(5));
function addone(num){
    return num+1
}

addTwo(5) // ye nhi hoga access ye hosting h
const addTwo = function(num){ // it's expression also and function to h hi
    return num +2
}
