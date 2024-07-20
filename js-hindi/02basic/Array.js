// ----------------- Array ---------------------------

const myArr = new Array(0,1,2,3,4,5)
myArr.push(6)
console.log(myArr[1]);
console.log(myArr);

// const myHero = ("marvel", "spdsuperheros", "gta senandraces", "oggi")
// console.log(myHero[0]);

// const myArr2 = (1,2,3,4)
// console.log(myArr2[3]);

// Array Methods

myArr.push(7)
myArr.push(6)
myArr.push(6)
myArr.pop()

myArr.unshift(9)
myArr.shift(3)

// let newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

//slice--->Shallowcopy, splice--->Deepcopy
console.log("A ", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B ", myArr);
const myn2 = myArr.splice(1,3)
console.log(myn2);

console.log("C", myArr);
const myn3 = myArr.slice(0,3)
console.log(myn3);


console.log(myArr);

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());

console.log(Array.from('foo'));
console.log(Array.from([1,2,3], (x)=> x + x));

const set = new Set(["foo", "bar", "baz", "foo"])
Array.from(set);
console.log(set);

const map = new Map([
    [1,2],
    [2,4],
    [4,8],
]);
Array.from(map);
console.log(map);

const maper = new Map([
    ["1", "a"],
    ["2", "b"],
]);
Array.from(maper);
console.log(maper);

Array.from(maper.values());
console.log(maper.values());
console.log(maper.keys());

const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']
const array3 = array1.concat(array2)
console.log(array3);

const letters = ["a","b","c"];
const numbers = [1,2,3];

const alphanumeric = letters.concat(numbers);
console.log(alphanumeric);

