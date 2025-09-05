class User {
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`USERNAME IS ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) // directly bheind the secne seekho 
        this.email=email;
        this.password=password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const CJ = new Teacher("Chirag", "chirag12@gmail.com", "12342")

CJ.addCourse();
CJ.logMe(); //username is chirag

const chiru = new User("rahul")

chiru.logMe() //username is rahul

console.log(CJ==Teacher); //false
console.log(CJ instanceof User);//true

