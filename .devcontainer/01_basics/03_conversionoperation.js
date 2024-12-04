let score= "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber= Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);// it's give the value NaN if 33abc ho to or 33 ho to print 33 

let length = null
console.log(typeof (length));//it's show object
let valueInLength= Number(length)
console.log(typeof valueInLength);//it's show number due to Number
console.log(valueInLength); // it's give the value 0 

let width = undefined
console.log(typeof (width));//it's show undefined
let valueInWidth= Number(width)
console.log(typeof valueInWidth);//it's show number due to Number
console.log(valueInWidth); // it's give the value NaN 

let height = true
console.log(typeof (height));//it's show boolean 
let valueInHeight= Number(height)
console.log(typeof valueInHeight);//it's show number due to Number
console.log(valueInHeight); // it's give the value 1 because it's true if false it's show 0


let isLoggedIn= 0

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn );// show false 

let someNumber= 33

let stringNumber= String(someNumber)
console.log(stringNumber) // print 33
console.log(typeof stringNumber); // now it's type is string 

//******************about operation-:********************** 

let value = 3
let negValue = -value
console.log(negValue);

//basic operations;

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**3);//power 2 ki power 3
console.log(2%2);

let str1 = "hello"
let str2 = "chirag"

let str3 = str1 + str2
console.log(str3);

//complex operations-:

console.log("1" + 2 );//12
console.log("1" + 2 + 2 );//122 beacuse start with string("1")
console.log(1 + "2" );//12
console.log(1 + 2 + "2" ); // beacuse start with number(1)

console.log(+true); //ans is 1
//console.log(true+); //not ans give error

let gameCounter = 100
gameCounter++; 
                      //both given 101
++gameCounter; 
console.log(gameCounter);


