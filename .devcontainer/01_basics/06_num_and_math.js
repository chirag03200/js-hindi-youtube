const score = 400
console.log(score);


const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // decimal ke baad two digit tk number aan a

const otherNumber = 323.56565

console.log(otherNumber.toPrecision(3)); // it gives the priority after before the decimal like here 3 means it gives 323 and its round figer is 324

const otherNumber2 = 32423.343

console.log(otherNumber2.toPrecision(3));// it gives 3.24e+4 means it gives 3.24 for beacuse of 3 and gives e ki power 4 mean the (total-1) number of palaces before the decimal 

const hundreds = 10000000000

console.log(hundreds.toLocaleString())// its gives commas according to us dollar if we use this is an indian style write in bracket ('en-IN')
 
 //**************** Maths ******************

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));//it's give round of 5
console.log(Math.ceil(4.3));// it's give the bigger value means 4.3=5
console.log(Math.floor(4.8));// it's give the smaller value means 4.8=4
console.log(Math.min(4,3,5,2));
console.log(Math.max(4,3,5,2));


console.log(Math.random()); //gives value 0. something
console.log((Math.random()*10) + 1); //ek digit aaye decimal se phle
console.log(Math.floor((Math.random()*10)) + 1); 
