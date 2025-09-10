const decriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(decriptor);
const chai = {
    name: 'ginger chai',
    price: 200,
    isAvailable: true,

    orderChai: function () {
        console.log("Chai nhi bnii");
    } // ye teeno lines as it is print ho jayegi
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', { // change kr skte  h property ko
    // writable: false,
    enumerable: true, // true krne ke baad name print hoga vrna false me nhi hoga
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key,value] of Object.entries(chai)) { // enteries use krke hum isko iterable bna skte h 
    if (typeof value !== 'function') {   //
    
    console.log(`${key}: ${value}`);
    }
} 