let myName ="chirag  "

console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.chirag = function(){
    console.log(`Chirag is here`);   
}

// heroPower.chirag() // print chirag is here  
myHeros.chirag() // print chirag is here  mtlb sbke pass chli jaaye


Array.prototype.heychirag = function(){
    console.log(`chirag say hello`);   
}

myHeros.heychirag() // chira say hello print hoga
// heroPower.heychirag() // isme kuch bhi print nhi hoga 

// conclusion is that ki object me define krenge to vo sbke pass pouch jaayega but kisin or me defune krenge to vo object ke pass nhi aayega

//inheritence

const user ={
    name:"chai",
    email:"abc@gmail.com"
}
const Teacher = {
    makeVideo:true
}

const TeachingSupport = {
    isAvailable:false
}

const TaSupport = {
    makeAssignment: 'js assignment',
    fulltime:true,

    __proto__:TeachingSupport
} // ye sb purana h 

Teacher.__proto__=user

// moder syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUseraName = "chaiaurcode   "

String.prototype.trueLength =function(){
    console.log(`$this`);     
    console.log(`True length is: ${this.trim().length}`);
}

anotherUseraName.trueLength()
    