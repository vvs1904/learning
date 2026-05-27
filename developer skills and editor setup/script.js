// //const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// //how to ignore error and find the max and min element
// const calcTempAmplitude = function (t1, t2) {
//   const temps = t1.concat(t2);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 1; i < temps.length; i++) {
//     if (temps[i] > max) max = temps[i];
//     if (temps[i] < min) min = temps[i];
//     if (typeof temps[i] !== "number") continue;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calcTempAmplitude([3, 5, 1], [9, 0, 5]);
// console.log(amplitude);
// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celcius",

//     value: Number(prompt("Degree Celcius")),
//   };
//   debugger;
//   console.log(measurement.value);
//   console.log(measurement);
//   console.table(measurement);
//   //   console.warn(measurement.value);
//   //   console.error(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

//Challenge
// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];
// const printForecast = function (arr) {
//   let str = "...";
//   for (let i = 0; i < arr.length; i++) {
//     str = str + `${arr[i]} degree celcius in ${i + 1} days` + "...";
//   }
//   console.log(str);
// };
// printForecast(data1);
