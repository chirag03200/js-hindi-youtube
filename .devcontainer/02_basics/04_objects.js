//tinder app
//const trinderUser = new Object() delcaration ye singleton

const trinderUser ={}//it's also declaration non singleton

trinderUser.id = "123abc"
trinderUser.name = "chirag"
trinderUser.isLoggedIn = false

//console.log(trinderUser);

const regularUser = {
    email: "abced@gmail.com",
    fullname: {
        userfullname:{
            firstname: "chirag",
        lastname: "jain"
        }      
    }
}
//console.log(regularUser.fullname.userfullname.firstname);//print chirag
//combine of array
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 ={obj1, obj2}//obj1 obj2 dono print hoga like array
//const obj3 = Object.assign({}, obj1, obj2)//isme dono object combine ho jaayenge obj1 obj2 print nhi hogaa with {} its really good
//{} = target h or obj1,obj2 source h

const obj3 = {...obj1, ...obj2}//ye bhi combine krega it's newly and more accurate
//console.log(obj3);
//database following
const users =[ 
    {
    id: 1,
    email:"abcs12@gmail.com"
    },
    {
        id: 2,
        email:"chursg23@gmail.com"
    },
]

users[1].email
console.log(trinderUser);

console.log(Object.keys(trinderUser));//data type is array yhaa features aayenge
console.log(Object.values(trinderUser));//like array value aayenge
console.log(Object.entries(trinderUser));//seprate features with seprate values

console.log(trinderUser.hasOwnProperty('isLoggedIn'));//ye feature btata h ki vo property h ya nhi h ,IsLoggeIn to h to ans true
console.log(trinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "chirag"
}

const {courseInstructor : instructor} = course
console.log(instructor);

 // react
//const navbar = ({company}) => {

//}

//navbar(company = "chirag")

//json api isme keys bhi string me hi hogi
// { 
//     "coursename": "js in hindi",
//     "price": "free",
//     "courseInstructor": "chirag"
// }

[
    {},
    {},
    {}
]

