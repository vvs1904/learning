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
const friends = ['Vanshika', 'Agrika', 'Tejasvini'];
const newLength = friends.push('Shreya');
console.log(friends);
console.log(newLength);


