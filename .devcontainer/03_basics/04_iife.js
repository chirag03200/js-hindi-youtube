// Immediately Invoked Function Expressions (IIFE)

// function chai() {
//     console.log(`DB CONNECTED`);
    
// }
// chai()

// immediately invoke kro to
(function chai() {
    console.log(`DB CONNECTED`);
    
})(); // it's also run and it's use by iife  and ; semicolon use because agla iife run krne ke liye

// 1st () = defintion likhte 
// 2nd () = excution call

// global scope ke pollution ko htane ke liye use kiya

// humne same too same function bnaya 
(function chai() {
    // here chai is named iife
    console.log(`DB CONNECTED 2`);
    
})(); // but ye inovked nhi hoga ye run nhi hoga because humne upper vaale function ko end nhi kiya end krne ke liye last me ; (semicolon) ye lgaye


((name) => {
    // ye simple iife h 
    console.log(`DB CONNECTED 3 ${name}`);
})('chirag') // error aayega // yha print ho jaayega chirag

// 2 ya 2 se jyada iife likhne ke liye ; semicolon use kro 