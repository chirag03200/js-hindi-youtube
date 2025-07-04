const coding =["js", "rb", "py", "java","cpp"]


// const values =coding.forEach((item)=>{
//     // console.log(item);
//     return item
// })
// console.log(values);//undefined

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter((num)=> num >4)

// console.log(newNums);//print 5 to 10

// const newNums=myNums.filter((num)=>{ // scope me ese krna pdega  scope me return krna pdhta h 
//     return num >4 
// })

// const newNums =[]

// myNums.forEach((num)=> {
//     if(num >4){
//         newNums.push(num)
//     }
// })
// console.log(newNums); // ye bhi run ho jaayega

const books =[
    {title:'book one', genre:'fiction',publish:1981,edition:2004},
    {title:'book two', genre:'Non-fiction',publish:1992,edition:2008},
    {title:'book three', genre:'History',publish:1999,edition:2007},
    {title:'book four', genre:'Non-fiction',publish:1989,edition:2010},
    {title:'book five', genre:'Science',publish:2009,edition:2014},
    {title:'book six', genre:'fiction',publish:1987,edition:2010},
    {title:'book seven', genre:'History',publish:1986,edition:1996},
    {title:'book eight', genre:'Science',publish:2011,edition:2016},
    {title:'book nine', genre:'Non-History',publish:1981,edition:1989}
];

let userBooks =books.filter((bk) =>bk.genre === 'History')

userBooks =books.filter((bk) =>bk.publish >= 1995 && bk.genre === 'History')

console.log(userBooks); // two books ka data aayega three or seven
