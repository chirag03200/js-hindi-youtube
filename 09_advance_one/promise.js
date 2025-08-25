const promiseOne = new Promise(function(resolve, reject) {
    // Do as an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Aysnc task is completed');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chirag", email: "chirag22@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            reslove({username: "hitesh", password: "231"})
        } else {
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);  
}).finally(()=> console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            reslove({username: "chiraag", password: "456"})
        } else {
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})

async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response);
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }

// try catch vaale ko alg format me kese likh skte h

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json()
})
.then((data)=> {
    console.log(data);
})
.catch((error) => console.log(error))