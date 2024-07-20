const myArr = [0, 1, 2, 3, 4, 5, 9]
// const myHeors = ["shaktiman", "naagraj"]

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(6));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);

// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);
// splice
var array=[1,2,3,4,5];
console.log(array.splice(1));//original array changes

//slice
var array2=[1,2,3,4,5,6] //original array does not change
console.log(array2.slice(3,6));


console.log("----after-----");
console.log(array);
console.log(array2);

const marvelcharacters = ["thor", "spiderman", "ironman", "hulk", "captain of america", "black panther"];
const mybolyhoodheros = ["sunny deol", "phrabhu deva", "satyagraha", "devdas", "karnataka"];
console.log(marvelcharacters);
marvelcharacters.push(...mybolyhoodheros);
console.log(mybolyhoodheros[2][2]);
// const allheros = [...marvelcharacters,...mybolyhoodheros];
// const allcharacters = marvelcharacters.concat(mybolyhoodheros);
// console.log(allcharacters);

const another_arr  = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const new_heros_reviewpoints = another_arr.flat(Infinity)
console.log(new_heros_reviewpoints.sort());
/**
 * there is an three methods which can consider as 
 * array methods as in from, of and isArray().
 * 
 */
console.log(Array.isArray([1,2,3,4,5]));
console.log(typeof Array);
console.log(Array.from("Hitesh"));
console.log(Array.of("jenish patel"));

const set = new Set(["foo", "bar", "baz", "foo"])
console.log(Array.from(set));

let score1 = 100
let score2 = 380
let score3 = 780
console.log(Array.from([score1, score2, score3]));
