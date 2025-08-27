const user ={
    username : "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`); // agar khudka use krna h inside to this use kro 
        console.log(this) // memory ke andr ki values dega
    }
}

console.log(user.username);
console.log(user.getUserDetails());

