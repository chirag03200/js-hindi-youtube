const marvel_heros =["thor", "tronman", "spiderman"]
const dc_heros =["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)//copy array in array

//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);//flash written

//const allHeros = marvel_heros.concat(dc_heros)//array in array one by one
//console.log(allHeros);

//const all_new_heros =[...marvel_heros, ...dc_heros]
//console.log(all_new_heros);// combine the arrays

//const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
//const real_another_array = another_array.flat(Infinity)//by infinity we find the total depth of the array and flat is work the combine the array 
//console.log(real_another_array);

console.log(Array.isArray("hitesh"));//find out ki ye array h ya nhi 
console.log(Array.from("hitesh"));//word is  spletting in array like h,i,t,e,s,h
console.log(Array.from({name: "hitesh"}))//give empty array(for interview question)

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));//combine all three scores in an array

