// REDUCED METHOD

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,currval) {
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc+currval
// } , 0)

const myTotal = myNums.reduce((acc,currval) => acc+currval,0)
// console.log(myTotal);

const shoppingCart =[
    {
        itemName:"js course",
        price: 999
    },
    {
        itemName:"py course",
        price: 999
    },
    {
        itemName:"mobile dev course",
        price: 10999
    },  
    {
        itemName:"data science course",
        price: 12999
    },
]

const priceTopay =shoppingCart.reduce((acc,item) => acc+item.price,0)
console.log(priceTopay); 
