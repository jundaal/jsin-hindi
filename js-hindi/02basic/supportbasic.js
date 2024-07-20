// 7  primitive datatypes
// Number,symbol
// Boolean, null
// undefined, string, BigInt
// reference datatypes
// Array, function , objects,date,regexp,error
const score = 100;
const valuescore = 100.5;
console.log(score);
console.log(typeof valuescore);
console.log(valuescore);
const isLoggedIn = true;
const outsideTemp = null;
let userEmail;
//  ----- symbol-------
const id = Symbol("123"); //symbol is unique
const anotherId = Symbol("123");
console.log(id === anotherId);

let myName = "hiteshmakda";
let anotherName = myName;
anotherName = "code with jenish";
console.log(myName);
console.log(anotherName);

let userone = {
  Name: "joy",
  upi: "user@ybl",
  city: "chennai",
  pincode: 500001,
};
let usertwo = userone;
usertwo.city = "banglore";
console.log(userone.city);
console.log(usertwo.city);
console.log([userone.Name, userone.upi, userone.city, userone.pincode]);
// -----------string---------------------
const age = 21;
const service = true;
const address = null;
console.log(
  `my age is ${age} \t my service is ${service} \n my address is ${address} `
);

const gamer = new String("hiteshhc");
console.log(gamer.__proto__);
console.log(gamer);
console.log(gamer.length);
console.log(gamer.toUpperCase());
console.log(gamer.trimEnd());
console.log(gamer.charAt(4));
console.log(gamer.indexOf("i"));
console.log(gamer.slice(-8,-1));
console.log(gamer.substring(0,5));

const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `${string1} and ${string2}`;
console.log(string3);

const string4 = new String ("A string object");
console.log(typeof string4);

const game = "cod";
console.log(game.charAt(2));
console.log(game[1]);

const a = "a";
const b = "b";
if(a > b){
    console.log(`${a} is greater than ${b}`);
}else if (a < b ) {
      console.log(`${a} is less than ${b}`);
}else{
    console.log(`${a} and ${b} are equal.`);
}
function areEqualCaseInsensitive(str1 , str2){
    return str1.toUpperCase() === str2.toUpperCase();
}
console.log(areEqualCaseInsensitive("haru", "heera"));

const str1 = 'Cats are the best!';

console.log(str1.endsWith('best!'));
// Expected output: true

console.log(str1.endsWith('best', 17));
// Expected output: true

const str2 = 'Is this a question?';

console.log(str2.endsWith('question'));

const gameName = "hiteshhc";
const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const atname = "         sandhya       ";
console.log(atname.replace("sandhya" , "kamlesh"));
console.log(atname.trim());
const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim());
const url = "https://hitesh.com/hitesh%30choudhary";
console.log(url.replace("%30", "-"));
console.log(url.includes("patel"));

const spliter = "hitesh-hc-com";
console.log(spliter.split("-"));

