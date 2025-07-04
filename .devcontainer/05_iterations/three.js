// for of loop

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);// run 1 to 5
    
}

const greetings = "hello world"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
}

// map

const map = new Map()
map.set('IN', "India")
map.set('Usa', "united state")
map.set('fr', "france")
// console.log(map);

for (const [key,value] of map) {
    // console.log(key, ':-',value);   
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

for (const [key,value] of myObject) {
    console.log(key, ':-',value);   // object is not iterable
}
