class User {
    constructor(email,password){
        this.email= email;
        this.password= password
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
console.log(chirag.password);
