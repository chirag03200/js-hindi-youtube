//array

const myArr =[0,1,2,3,4,5]
//const myHeros=["shktiman","doremon","naagraaj"] 

//console.log(myArr[0]);
//console.log(myHeros[2]);

//Array methods

//myArr.push(6)//print the values 0 to 6 because we intialize the arr on top is starting with 0 
//myArr.pop()//delete the last value
//console.log(myArr);

//myArr.unshift(0);//means 0 is shift the starting of array 0 ki jgh or bhi hota like 6 to 6 bhi starting me add ho jaata 
// myArr.shift();//by shift we delete the values of unshift

//console.log(myArr.includes(9));// ye check krta h ki array me 9 h ya nhi if h to true dega or nhi h to false dega so datatype will be boolean
//console.log(myArr.indexOf(9));//by this we check the index value of element if no value in the array so written is -1

//const newArr = myArr.join()
//console.log(myArr);
//console.log(newArr);//join ne string me convert kr diya
//console.log(typeof newArr);//string

//slice,splice ka use

console.log("A" , myArr);
const myn1 = myArr.slice(1,3)//print number 1 to 3 but 3(last digit is not include) not include
console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1,3)//but in splice the last digit is include
console.log("c", myArr);
console.log(myn2);
//but if we use the slice arr at splice so the value of array will be deleted which is in slice
//so C has the value [0,4,5]not [1,2,3]
