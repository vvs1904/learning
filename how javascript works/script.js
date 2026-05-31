"use strict";
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName); // accesses it from the global scope because its the first function defined
//   function printAge() {
//     let output = `${firstName},You are ${age},born in ${birthYear}`;
//     console.log(output);
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = "Steven";
//       const str = `Oh, and you are a millenial,${firstName}`; //first it looks for the variable in the same scope and then in another scope
//       console.log(str);
//       // function add(a, b) {
//       //   return a + b;
//       // }
//       output = "NEW OUTPUT!";
//     }
//     // console.log(str); //cannot be accessed here because out of block scope

//     console.log(millenial); //this can be accessed because var variables are function scoped
//     // add(2, 3); //functions are also block scoped only in strict mode
//     console.log(output);
//   }
//   printAge();
//   return age;
// }
// const firstName = "Jonas";
// calcAge(1991);

//Hoisting and TDZ
// console.log(me);
// console.log(job);
// console.log(year);

// var me = "Jonas";
// let job = "Student";
// const year = 1991;

//Functions
// console.log(addDec(2, 3));
// console.log(addExpr);
// console.log(addArrow);
// function addDec(a, b) {
//   return a + b;
// }
// const addExpr = function (a, b) {
//   return a + b;
// };
// var addArrow = (a, b) => a + b;

// if (!numProducts) deleteShoppingCart(); // here bcz of hoisitng of numProducts,it is undefined in this case which is a falsy value hence it calls the required function
// //Example

// var numProducts = 10;
// function deleteShoppingCart() {
//   console.log("All products deleted");
// }

// var x = 1; //create a property on global window object while the other two will not
// let y = 2;
// const z = 3;
// console.log(x === window.x);
// console.log(y === widnow.y);
// console.log(z === window.z);

// console.log(this);
// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(this);
// }; //uses scope of its parent
// calcAgeArrow(1980);

// const vanshika = {
//   year: 2004,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// vanshika.calcAge();

// const matilda = {
//   year: 2017,
// };
// matilda.calcAge = vanshika.calcAge; //method borrwoing
// matilda.calcAge();

// const f = vanshika.calcAge;
// f(); //just a fucntion this is also undefined

//var firstName = "Matilda";

// const vanshika = {
//   firstName: "Vanshika",
//   year: 2004,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//     // const self = this; //self or that

//     // const isMillenial = function () {
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     //Solution 2-use an arrow function
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },
//   greet: () => console.log(`Hey ${this.firstName}`), // because arrow functions take the this of their parent scope,it will matilda because var creates properties on global object
// };
// vanshika.greet();
// vanshika.calcAge();

// //Arguments keyword

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5);
// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

const vanshika = {
  // yu cant change the object but the properties of the object
  firstName: "Vanshika",
  lastName: "sinha",
  age: 22,
};

function marryPerson(originalperson, newLastName) {
  originalperson.lastName = newLastName;
  return originalperson;
}
const marriedVanshika = marryPerson(vanshika, "Davis");
// const marriedVanshika = vanshika;
// marriedVanshika.lastName = "Davis";

console.log("Before:", vanshika);
console.log("After", marriedVanshika);

const vanshika2 = {
  firstName: "Vanshika",
  lastName: "Sinha",
  age: 21,
  family: ["Shruti", "Mom", "Dad"],
};
const vanshika2Copy = { ...vanshika2 };
vanshika2Copy.lastName = "Davis";
console.log(vanshika2, vanshika2Copy);

vanshika2Copy.family.push("Khushi");
vanshika2Copy.family.push("Anil");

console.log("Before:", vanshika2);
console.log("After", vanshika2Copy); //This is called a shallow copy because a reference to the array was created

const vanshikaClone = structuredClone(vanshika2);
vanshikaClone.family.push("Khushi");
vanshikaClone.family.push("Anil");

console.log("Before Clone:", vanshika2);
console.log("After the clone :", vanshikaClone);
