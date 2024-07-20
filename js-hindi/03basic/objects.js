//singleton
// const tinderuser = new Object()
// console.log(tinderuser);
// Object.create
//objects literals

const { log } = require("debug/src/node");

// const mysym = Symbol("key1")
// const value_user = Symbol("value")
const jsuser = {  //objects
    name : "Jaynil",
    ["mysym"]: "A34rtY456",
    ["value_user"] : "key",
    Enroll : 23834,
    location : "Masoori",
    email : "joy23@gmail.com",
    Is_logged_In : false,
    lastloginDays : ["friday", "saturday"]
}
// console.log(jsuser["Is_logged_In"]);
// console.log(jsuser.Is_logged_In);
// console.log(jsuser["mysym"]);
// console.log(jsuser.email);
// console.log(jsuser["value_user"]);

// const Is_logged_In = Symbol("Login");
// let items = {
//     Firstname : "jitu",
//     Lastname : "mahinder",
//     age : 34,
//     salary : 25000,
//     ["work"] : "Driver",
//     ["Login_id"] : 2465,
//     ["Login_password"] : 554426,
// }
// console.log(items["Login_id"]);
// console.log(items["Login_password"]);
// console.log(items["Firstname"]);
// console.log(items["Lastname"]);

// jsuser.email = "jenish@gmail.com"
// jsuser.Login_password = 5445
// Object.freeze(jsuser)
// jsuser.email = "joy23@gmail.com"
// console.log(jsuser.email);
// jsuser.Login_password = 554426;
// console.log(jsuser.Login_password);

jsuser.greeting = function(){
    console.log("Hello JS user");
}
jsuser.greetingtwo = function(){
   console.log(`Hello JS user, ${this.location}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());

//``- string interpolation
//` ${}, ${} ,...................`


// -----------------objects-----------------------
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {4: "c", 5: "d"}

const obj4 = Object.assign({},obj1,obj2,obj3)
console.log(obj4);

const obj5 = {...obj1, ...obj2,...obj3, ...obj4}//spread in small objects
console.log(obj5);

console.log("Jenish");
const accountId = 1235647;
let accountEmail = "hitesh@gmail.com"
var accountPassword = "126534"
accountCity = "jaipur"

// accountId = "hitesh"
accountCity = "udaipur"
console.log(accountCity);
console.table([accountEmail,accountId,accountPassword,accountEmail,accountCity]);
let score = "hitesh";
console.log(typeof score);
console.log(typeof (score));
let valuInNumber = Number(score)
console.log(valuInNumber);
console.log(typeof valuInNumber);
let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
console.log(+true);
console.log(+"");
console.log( (3 + 4) * 5 % 3);

// Dates-Objects
let myDate = new Date ();
// console.log(myDate.toUTCString());
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.getMonth() + "-" + myDate.getDate() + "-" + myDate.get);
// console.log(typeof myDate);

// let mycreatedDate = new  Date(2024,6,17,10,37);
// console.log(mycreatedDate.toLocaleString());
let mycreatedDate = new  Date("2024-06-17");
console.log(mycreatedDate.toLocaleString());

// let mycreatedDate1 = new  Date(2024,6,17);
// console.log(mycreatedDate1.toDateString());
// console.log(mycreatedDate1.getDay(mycreatedDate1));
let timestamp = Date.now()
console.log(timestamp);
console.log(mycreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let mynewDate = new Date()
console.log(mynewDate.getYear());
console.log(mynewDate.getDay());
console.log(mynewDate.getMonth());
console.log(mynewDate.getHours());
let newDate = mynewDate.toString('default',{
    calendar: "Sun",
    timeZone:"canadian",
    weekday : "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute : "2-digit",
    second :"2-digit"
    
    });
    console.log(newDate.toLocaleString());