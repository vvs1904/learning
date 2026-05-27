// 'use strict';
// let hasDriversLiscense = false;
// const passTest = true;
// if (passTest) {
//     hasDriversLiscense = true;
// }
// if (hasDriversLiscense) {
//     console.log('I can drive :D');
// }
// function logger() {
//     console.log('My name is Jonas');
// }
// logger();// calling/running/invoking a unction
// logger();//produces a undefined value
// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;

// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);
// //fucntions are ideal for writing dry code(dont repeat yourself programs)
// function calcAge1(birthYear) {//function declaration
//     const age = 2037 - birthYear;
//     return age;
// }
// const age1 = calcAge1(2004);
// console.log(age1);

// const calcAge2 = function (birthYear) {//function expression
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);

// //function declarations can be called before declared but fucntion expressions cannot be .
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = birthYear => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }
// console.log(yearsUntilRetirement(1991));
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years.`
// }
// console.log(yearsUntilRetirement(1991, 'Smriti'));
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces f oranges.`;
//     return juice;
// };
// console.log(fruitProcessor(2, 3));
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     }
//     else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }
//     //return `${firstName} retires in ${retirement} years`;

// }
// console.log(yearsUntilRetirement(1970, 'Jonas'));
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);
// const y = new Array(1991, 1984, 2008, 2020);
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// friends[2] = 'Jay';
// console.log(friends);
// const firstName = 'Vanshika';
// const vanshika = [firstName, 'Sinha', 2026 - 2004, 'student', friends];
// console.log(vanshika);
// console.log(vanshika.length);
// const calcAge = function (birthYear) {
//     return 2026 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);
// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);
// const friends = ['Vanshika', 'Agrika', 'Tejasvini'];
// const newLength = friends.push('Shreya');
// console.log(friends);
// console.log(newLength);
// friends.unshift('Vanisha');
// console.log(friends);
// const popped = friends.pop();
// console.log(friends);
// // push method returns the length of the new array and pop returns the deleted element
// console.log(popped);
// friends.shift();
// console.log(friends);
// console.log(friends.indexOf('Vanshika'));
// console.log(friends.indexOf('Agrika'));
// console.log(friends.includes('Vanshika'));
// console.log(friends.includes('Bob'));// it does not do type coercion and checks strict equality
// const vanshika = {
//     firstName: 'Vanshika',
//     lastName: 'Sinha',
//     age: 2026 - 2004,
//     job: 'student',
//     friends: ['Agrika', 'Tejaswini', 'Shreeya', 'Shreya']
// };
// console.log(vanshika);
// console.log(vanshika.lastName);
// console.log(vanshika['lastName']);
// const nameKey = 'Name';
// console.log(vanshika['first' + nameKey]);
// console.log(vanshika['last' + nameKey]);
// const a = prompt('What do you know about vanshika');
// console.log(a);
// console.log(vanshika[a]);//undefined is a datatype that occurs when we try to access values on a object that does not exist
// if (vanshika[a]) {
//     console.log(vanshika[a]);
// }
// else {
//     console.log('Wrong request');
// }
// vanshika.location = 'Lucknow';
// vanshika['currentlocation'] = 'Ghaziabad';
// console.log(vanshika);
// //Challenge
// console.log(`${vanshika.firstName} has ${vanshika.friends.length},and his best friends are called ${vanshika.friends[0]}`);
// const vanshika = {
//     firstName: 'Vanshika',
//     lastName: 'Sinha',
//     birthYear: 2004,
//     job: 'student',
//     friends: ['Agrika', 'Shreya', 'Shreeya'],
//     hasDriversLicense: true,
//     calcAge: function () {
//         // console.log(this);
//         // return 2026 - this.birthYear;
//         this.age = 2026 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()} old ${this.job} and she has a ${this.hasDriversLicense ? 'a' : 'does not have a '} drivers lisence.`
//     }
// };
// // console.log(vanshika.calcAge(2004));
// // console.log(vanshika['calcAge'](2004));
// // this refers to the currently calling object 
// // console.log(vanshika.calcAge());
// vanshika.calcAge();
// console.log(vanshika.age);
// //Challenge
// //"Vanshika is a 22 year old girl and she has/no drivers lisence";
// console.log(vanshika.getSummary());
// for (let i = 1; i <= 10; i++) {
//     console.log(`lifting weight repition ${i}`);
// }
// const vanshikaarray = [
//     'Vanshika',
//     'Sinha',
//     2026 - 2004,
//     'student',
//     ['Vanshika', 'Shreeya', 'Shreya']

// ];
// const types = [];
// for (let i = 0; i < vanshikaarray.length; i++) {
//     console.log(vanshikaarray[i], typeof vanshikaarray[i]);
//     types[i] = vanshikaarray[i];
// }
// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//     ages.push(2026 - years[i]);
// }
// console.log(ages);
// //continue and break
// for (let i = 0; i < vanshikaarray.length; i++) {
//     if (typeof vanshikaarray[i] !== 'string')
//         continue;
//     console.log(vanshikaarray[i], typeof vanshikaarray[i]);
// }
// for (let i = 0; i < vanshikaarray.length; i++) {
//     if (typeof vanshikaarray[i] == 'number')
//         break;
//     console.log(vanshikaarray[i], typeof vanshikaarray[i]);
// }
// const vanshika = [
//     'Vanshika',
//     'Sinha',
//     2026 - 2004,
//     'student',
//     ['Smriti', 'Shruti', 'Agrika']
// ];
// // for (let i = vanshika.length - 1; i >= 0; i--) {
//     console.log(vanshika[i]);
// }
// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`${exercise}`);
//     for (let j = 1; j < 6; j++) {
//         console.log(`liftign weight ${j}`);
//     }
// }
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice != 6) {
    console.log(`You rolled a${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice == 6)
        console.log('The loop will end now');
}

