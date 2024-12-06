const name = "hitesh"
const repoCount = 23

//console.log(name + repoCount + "Value");  do not use this type of syntax

console.log(`hello my name is ${name} and my repo count is ${repoCount}`); // use this type of syntax only

const gameName = new String('chir-agg-com') // com use kiya h last vaali line ke liye yha sirf chiragg
// niche saare humne methods use kiye h string ke 

console.log(gameName[0]);
console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());// chiragg ko CHIRAG bna dega

console.log(gameName.charAt(3)); // ye index number btayega ki chiragg me 3rd index pr konsa word h index will be start on 0 
console.log(gameName.indexOf('i')); // ye btayega ki i komse index pr h 

const newString = gameName.substring(0, 4) // index 4 ki value print mhi krega only 0 1 2 3 index ki value hi print krega
console.log(newString);

const anotherString = gameName.slice(-6 ,4)
console.log(anotherString);

const newStringOne = "          chiragg         "
console.log(newStringOne);
console.log(newStringOne.trim());// chiragg vaale white spaces ko hta degaa

const url ="https://chirag%300.com"

console.log(url.replace('%300', '&')) // %300 replace ho gya & se

console.log(url.includes('shiv')); // mtlb url me ye word h ya nhi agar h to true show hoga vrna false to yha ans false h 

console.log(gameName.split('-')); // yha - se saare string ke word split ho jaayenge ek array me
