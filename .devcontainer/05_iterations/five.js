//for each loop

const coding =["js", "rb", "py", "java","cpp"]

// coding.forEach(function (item) { //function ka name nhi hoga isme
//     console.log(item);// run hoga 
// })

// coding.forEach((item) => { // arrrow function
//     console.log(item);
// })

// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe) // ese bhi run ho jaayega

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

//array me object

const myCoding =[
    {
        languageName:"javascript",
        languageFilename:"js"
    },
    {
        languageName:"java",
        languageFilename:"java"
    },
    {
        languageName:"python",
        languageFilename:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName); 
})