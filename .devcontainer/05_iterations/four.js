const myObject = {
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

//forin
for (const key in myObject) {
    //  console.log(key);
    // console.log(myObject[key]);//ye full name print krega
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming =["js", "rb", "py", "java","cpp"]

for (const key in programming) {
    // console.log(programming[key]);//names print krega
    // console.log(key);//indexing show krega
}

const map = new Map()
map.set('IN', "India")
map.set('Usa', "united state")
map.set('fr', "france")
// console.log(map);

for (const key in map) {
    console.log(key); // not run
     
}