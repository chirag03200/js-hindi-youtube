// const userEmail = "jain@cjain.ai"

// if (userEmail) {
//     console.log("got user email"); // ye print ho jaayega
// } else{
//     console.log("don't have user email");
// }

const userEmail = "" // empty string h to else

if (userEmail) {
    console.log("got user email");
} else{
    console.log("don't have user email");
}

//falsy values
// false,0,-0,BigInt 0n,"",null,undefined,Nan inke alava sb truthy values hogi

//truthy values
//"0"(string ke nadr kuch bhi ho turthy value hogi)."false"," ",[],{},function(){}

// false==0 ,false == "".0=="" :- true

// NUllish coalescing opertator(??):null undefined

let val;
// val = 5 ?? 10 // print 5
val = null ?? 10 // print 10
val = undefined ?? 15 // print 15
val = null ?? 10 ?? 15 // print 10
console.log(val); 

//Ternary Operators

// condition ?  true : false // ye c lang me bhi hota h 

const price = 100

price <=80 ? console.log("less than 80") : console.log("more than 80");

