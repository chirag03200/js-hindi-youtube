class User {
    constructor(email,password){
        this.email= email;
        this.password= password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email= value // setter ko kbhi return nhi krte  h
    }

    get password(){
        // return this._password.toUpperCase() // underscore isliye lgaya because stack ki size maximum na ho
        return `${this._password}chiraaag` // yha se passwrod print hoga 1321chiraaag
    }

    set password(value){
        this._password =  value.toUpperCase()
    }
}

const chirag = new User("chirag34@gmail.com", '1321')
console.log(chirag.email); //for email
console.log(chirag.password); // for password
