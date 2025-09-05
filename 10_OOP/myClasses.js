// //ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email =email;
        this.password=password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const CJ = new User("chirag" ,"chrag@123gmail.com", "1234")

console.log(CJ.encryptPassword()); //1234abc print ho  jaayega
console.log(CJ.changeUsername());//chirag upper case me print ho jaayega

//behind the secne 

function User(username, email, password){
    this.username=username;
    this.email=email;
    this.password=password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const chiru = new User("chirag" ,"chrag@123gmail.com", "1234")

console.log(chiru.encryptPassword()); //1234abc print ho  jaayega
console.log(chiru.changeUsername());//chirag upper case me print ho jaayega
