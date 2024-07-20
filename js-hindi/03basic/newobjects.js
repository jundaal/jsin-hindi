// const tinderUser = new Object() //its an singlton object.
// console.log(tinderUser);
const TinderUser = {};
TinderUser.id = "123abc";
TinderUser.name = "sam";
TinderUser.isLoggedIn = false;
console.log(TinderUser);

//objects in objects
const regularuser = {
  email: "jenny@microsoft.com",
  fullname: {
    userfullname: {
      ["firstname"]: "pratap",
      lastname: "jaysinh",
    },
  },
};
email="jimmy@google.com";
Object.freeze(regularuser.email);
console.log(regularuser["fullname"]);
const reg = {...regularuser}
console.log(reg);
//optional chainning.....
console.log(regularuser.fullname?.userfullname?.firstname);

// objects combine
const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}
const o1 = {name: "aman",location: "ghorakhpur"}
const o2 = {age: 52,work: "remotearea"}
const o3 = {...{},...o1,...o2}
console.log(o3);
// method 1
// (spread operators)
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);
//method 2
//(objects assign)
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);
//Array object

const user = [
  {
    id : "23654",
    name : "jamin",
    salary : 25000,
    location : "mumbai",
    email: "jenish@gamil.com"
    
  },
  {
    id : "23654",
    name : "jamin",
    salary : 25000,
    location : "mumbai",
    email: "jenish@gamil.com"
  },
  {
    id : "23654",
    name : "jamin",
    salary : 25000,
    location : "mumbai",
    email: "jenish@gamil.com"
  },
  {
    id : "23654",
    name : "jamin",
    salary : 25000,
    location : "mumbai",
    email: "jenish@gamil.com"
  }
]
// user[3].location
console.log(user[2].location);
// console.log(TinderUser);
const tinnyUser = {
  id : 23,
  name:"ghanshyam",
  role : "principal",
  work : "mumbai"
}
console.log(Object.values(tinnyUser));
console.log(Object.keys(tinnyUser));
console.log(Object.entries(tinnyUser));
console.log(TinderUser.hasOwnProperty('registeruser'));


const course = {
  coursename : 'js in hindi',
  price : '999',
  courseInstructor : 'joywithcode'
}

courseInstructor : 'joywithcode'
//destructring objects
const {courseInstructor: Instructor} = course;
console.log(Instructor);

// {
//   "name" : "jenish",
//  " coursefield" : "cloud engineer",
//  " price": "free"

// }
// API CONCEPT

[
  {},
  {},
  {},
  {}
]
