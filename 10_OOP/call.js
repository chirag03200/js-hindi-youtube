function SetUserName(username){
    //complex DB calls
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
    SetUserName.call(this, username) // this lgane ke baad username set ho jaayega also call ka use krenge 

    this.email = email
    this.password = password
}

const chai = new createUser("chai" , "chai@23.com" , "1232")
console.log(chai);
