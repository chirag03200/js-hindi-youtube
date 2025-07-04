//for

for (let  i = 0;  i < 10;  i++) { // yha phle index likha huwa tha or ek saaath saari vales change krni h to ctrl+d
    const element =  i;
    if(element == 5) {
        // console.log("5 is good");     
    }
    // console.log(element); // 0 to 9
}

// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop value: ${i}`);
    
//     for (let j = 0; j <= 10; j++) {
//     // console.log(`inner loop value ${j} and inner loop ${i}`);   
//     console.log(i +'*' + j + '=' + i*j); // table create ho jaayegi
    
//     }
// }

let myArray = ["flash", "batman", "supernam"]
console.log(myArray.length);

for (let i = 0; i <= myArray.length; i++) { // = ye lgayenge to undefoned bhi aayega
    const element = myArray[i];
    console.log(element);
}

//break and continue

// for (let i = 1; i <= 20; i++) {
//     if(i==5){
//         console.log("detected 5");
//         break // 4 ke baad deteced 5 print hoga then code stop
//     }
//     console.log(`value of i is ${i}`);
// }

for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log("detected 5");
        continue // 4 ke baad deteced 5 print hoga then 6 se 20 tk
    }
    console.log(`value of i is ${i}`);
}

