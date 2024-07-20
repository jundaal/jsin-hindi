const score = 400;
// console.log(score);
const balance = new Number(1000000)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(3));

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3));

const hundreds = 2000000
// console.log(hundreds.toLocaleString('en-In'));

// +++++++++++++++++++++++ Mathematics++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-45));
console.log(Math.ceil(4.5));
console.log(Math.floor(3.5));
console.log(Math.round(8.5));
console.log(Math.PI);
console.log(Math.min(4,1,2,8,7,9));
console.log(Math.max(4,1,2,8,7,9));
console.log(Math.sqrt(36));
console.log(Math.pow(2,3));
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log((Math.random()*11));
console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (20 - 10 + 1)) + 10);

// Math.Exponential
console.log(Math.E);
console.log((1 + 1 / 1000000) ** 1000000);
function getNapier() {
    return Math.E;
}

console.log(getNapier());
console.log(Math.exp(0));
console.log(Math.exp(1));
console.log(Math.exp(-1));
console.log(Math.exp(2));

function getBaseLog(x , y) {
    return Math.log(y) / Math.log(x);
}
console.log(getBaseLog(2,8));
console.log(getBaseLog(5,625));
console.log(Math.expm1(1));
console.log(Math.log10(100000));
console.log(Math.log10(2));
console.log(Math.log10(1));
console.log(Math.log10(0));
Math.log10(-2); // NaN
Math.log10(-0); // -Infinity
Math.log10(0); // -Infinity
Math.log10(1); // 0
Math.log10(2); // 0.3010299956639812
Math.log10(100000); // 5
// Math.log10(Infinity); //Infinity
// ----------------------------  Dates  --------------------------
let myDate = new Date()
console.log(typeof myDate);
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());
console.log(myDate.toISOString());
console.log(myDate.toUTCString());

// let mycreatedDate = new Date(2024, 5, 27);
// console.log(mycreatedDate.toLocaleDateString());
let mycreatedDate1 = new Date(`06-27-2024`);
console.log(mycreatedDate1.toLocaleString()); 
let myTimeStamp =  Date.now()

// console.log(myTimeStamp);
// console.log(myTimeStamp.getTime());
// console.log(Math.floor(Date.now()/1000));

let anotherdate = new Date()
console.log(anotherdate);
console.log(anotherdate.getMonth() + 1);
console.log(anotherdate.getDay());

anotherdate.toLocaleString("Default", {
  weekend: "long",
  day: "numeric",
  month: "short",
  year: "numeric",
});

const moonLanding = new Date("July 20, 69 00:20:18");
console.log(moonLanding.getFullYear());
console.log(moonLanding.getMonth());


