class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createId(){ //property ka axiss nhi dena chahte h
        return `1234`
    }
}

const CJ = new User("Chirag")
console.log(CJ.createId());

class teacher extends User{
    constructor(username, email){
        super(username)
        this.email=email
    }
}

const chiru = new teacher("CHIRAG", "jainc@gmail.com")
console.log(chiru.createId());
