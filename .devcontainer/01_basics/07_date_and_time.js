// ************ Dates **************
// 1 january 1970 ke baad ki koi si bhi date ko access kr skte h

let myDate = new Date()
console.log(myDate.toString());// present date bta dega
console.log(myDate.toDateString());//date like words   day/month/date/year
console.log(myDate.toLocaleString());//date like   mm/dd/yy and time it's use for time
console.log(typeof myDate);//object

let myCreatedDate = new Date(2022,0,11)// month started by 0 in js means 0 is = january
//console.log(myCreatedDate.toDateString());//it's give the day

let myCreatedDate2 = new Date(2022,0,11,5,4,44)// it's give time also min/hour/second
console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now()

 console.log(myTimeStamp);
 console.log(myCreatedDate.getTime());// compare time in milli seconds

console.log(Math.floor(Date.now()/1000));// it's give time in seconds   INTERVIEW QUESTION

let  newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1)// +1 se shi date deta h ese day and date kr skte h 
console.log(newDate.getDay()+1);//yha bhi +1 krna pdega

//`${newDate.getDay()} and the time`

newDate.toLocaleString('default' ,{
    weekday:"long",
})




