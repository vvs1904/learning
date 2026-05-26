// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);
// console.log("Jonas");
// console.log(23);
// let firstName = 'Smriti';
// console.log(firstName);
// let a = true;
// console.log(a);
// console.log(typeof true);
// console.log(typeof a);
// console.log(typeof 23);
// console.log(typeof 'Vanshika');
// let a = true;
// console.log(typeof a);
// a = 'Vanshika Vijay Sinha';
// console.log(typeof a);
// let year;
// console.log(year);
// console.log(typeof year);
// year = 26;
// console.log(year);
// console.log(typeof year);
// console.log(typeof null);
// const c = 9;
// var b = 'True';
// console.log(b);
// b = 'Vanshika Vijay Sinha';
// console.log(b);

// const now = 2026;
// const ageVanshika = 2026 - 2004;
// const ageVanisha = 2026 - 2009;
// console.log(ageVanisha, ageVanshika);
// console.log(ageVanisha / 2, ageVanshika / 2);
// console.log(2 ** 3);//exponential function

// let firstName = 'Vanshika';
// let lastName = 'Sinha';
// console.log(firstName + ' ' + lastName);
// console.log(ageVanshika > ageVanisha);
// console.log(ageVanisha >= 18);
// const isFullAge = ageVanisha >= 18;
// console.log(isFullAge);

// let x, y;
// x = y = 10 - 9 - 1;
// console.log(x, y);
// const firstName = 'Vanshika';
// const job = 'student';
// const birthyear = 2004;
// const year = 2026;
// // const vanshika = "I'm " + firstName + ',a' + (year - birthyear) + 'years old' + job + '!';
// // console.log(vanshika);
// const result = `I am ${firstName}, a ${year - birthyear} years old ${job}!`;
// console.log(result);
// console.log(`My name is Vanshika Vijay Sinha`);

// //Multiline strings
// // console.log('String with\n\
// //     multi line\n\
// //     string');

// console.log(`String
//     with
//     multiple
//     lines`);
// const age = 15;
// //onst isOldEnough = age >= 18;
// if (age >= 18) {
//     console.log('Sarah can start her driving liscense');
// }
// else {
//     const years = 18 - age;
//     console.log(`Sarah is too young. wait for another ${years} years.`);
// }
// const birthyear = 2004;
// let century;
// if (birthyear < 2000) {
//     century = 20;

// }
// else {
//     century = 21;
// }
// console.log(century);
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);
// console.log(Number('Jonas'));
// console.log(typeof NaN); // type of NaN is still a number
// console.log(String(23), 23);

// //type coercion
// console.log('I am' + 23 + 'years old');
// console.log('23' - '10' - 3);// string to number
// console.log('23' + '10' + 3);//number to string
// console.log('23' / '2');
// let n = '1' + 1;
// n = n - 1;
// console.log(n);


// 5 falsy values:0,'',undefined,null,NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 0;
// if (money) {
//     console.log('Dont spend it all');
// }
// else {
//     console.log('You should get a job!');
// }
// let height;// if height is 0 it is also undefined because 0 is a falsy value
// if (height) {
//     console.log('Yay!Your height is defined ');
// }
// else {
//     console.log('Height is undefined');
// }
// const age = 18;
// if (age == 18) {
//     console.log('You just became an adult');
// }
// console.log('18' == 18);// does type coersion
// console.log('18' === 18);//does not do type coercion
// const fav = prompt('Whats your favorite number');
// console.log(fav);
// console.log(typeof (fav));
// if (fav == 23) {
//     console.log('cool! 23 is a great number');
// }
// else if (fav == 7) {
//     console.log('Cool! 7 is a great number');
// }
// else {
//     console.log('Number is not 23 or 7');
// }
// if (fav !== 23) {
//     console.log('Why not 23 !');

// }
// const hasDriversLiscense = true;
// const hasgoodVision = true;
// console.log(hasDriversLiscense && hasgoodVision);
// console.log(hasDriversLiscense || hasgoodVision);
// console.log(!hasDriversLiscense);
// let shouldDrive = hasDriversLiscense && hasgoodVision;
// if (shouldDrive) {
//     console.log('Sarah s able to drive');
// }
// else {
//     console.log('Someone else should drive');
// }
// const isTired = true;

// shouldDrive = hasDriversLiscense && hasgoodVision && !isTired;
// if (shouldDrive) {
//     console.log('Sarah s able to drive');
// }
// else {
//     console.log('Someone else should drive');
// }

const day = 'monday';
// switch (day) {
//     case 'monday':// strict comparison
//         console.log('Plan my course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesady':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the week');
//         break;
//     default:
//         console.log('Not a valid day');
// }
// if (day == 'monday') {
//     console.log('Plan my course structure');
//     console.log('Go to coding meetup');
// }
// else if (day == 'tuesday')
//     console.log('Prepare theory videos');
// else if (day == 'wednesday' || day == 'thursday')
//     console.log('Write code examples');
// else if (day == 'friday')
//     console.log('record videos');
// else if (day == 'saturday' || day == 'sunday')
//     console.log('Enjoy the week');
// else
//     console.log('Not a valid day');
const age = 23;
age >= 18 ? console.log(' will drink wine ') : console.log('I will like to drink water');
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);




