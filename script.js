
//I commented out the questions as I went so nothing would overlap. 
//I'm not sure if this is the correct format for submitting the homework
// QUESTION ONE

// let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// function subtractAges(array) {
//   let firstNum = array.shift();
//   let secondNum = array.pop();

//   return secondNum - firstNum;
// }

// function averageNumbers(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }

//   let average = sum / array.length;
//   console.log(average);

//   return sum;
// }

// averageNumbers(ages)

// QUESTION 2

// let nameTotal = 0;
// for (let i = 0; i < names.length; i++) {
//   nameTotal = nameTotal += names[i].length;
// }

// console.log(nameTotal / names.length);

// QUESTION 3
// to access the last element in an array you could use array.pop(), or if you want to access the last
// element of the array without removing the value you could use array.length -1

// let lastElement= names[names.length-1]
// console.log(lastElement)

// console.log(names.pop())
// let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//QUESTION 4
// to access the first element of the array you could use array.shift()
// or you could use array[0]

// console.log(names[0])

// console.log(names.shift())

// QUESTION 5
// let namesLength = names.map(function (element) {
//     return element.length
// });
// console.log(namesLength)

// // QUESTION 6

// console.log(namesLength.reduce(function(accumulator, currentValue){
//     return accumulator + currentValue
// }))

// QUESTION 7

// function repeatWords(word, n){
//     return word.repeat(n)
// }

// console.log(repeatWords("Hello", 2))

//QUESTION 8

// function fullName(firstName, lastName){
//     return firstName + " " + lastName
// }

// console.log(fullName("Danielle", "Byrne"))

// QUESTION 9

// let ages = [3, 9, 23, 64, 2, 8, 28, 93];
// let moreAges = [4, 17, 6, 3, 9];

// function greaterThan100(array) {
//   let arraySum = 0;

//   for (let i = 0; i < array.length; i++) {
//     arraySum += array[i];
//   }
//   console.log(arraySum);

//   if (arraySum > 100) {
//     console.log(true);
//     return true;
//   } else {
//     return false;
//   }
// }

// greaterThan100(ages);

// QUESTION 10

// function sumArray(array) {
//   let arraySum = 0;

//   for (let i = 0; i < array.length; i++) {
//     arraySum += array[i];
//   }

//   return arraySum / array.length;
// }

// console.log(sumArray(ages));

// //QUESTION 11

// function compareArrays(arrayOne, arrayTwo) {
//   let arrayOneSum = 0;
//   let arrayTwoSum = 0;
//   // getting average for first array
//   for (let i = 0; i < arrayOne.length; i++) {
//     arrayOneSum += arrayOne[i];
//   }

//   let arrayOneAverage = arrayOneSum / arrayOne.length;

//   //getting average for second array
//   for (let i = 0; i < arrayTwo.length; i++) {
//     arrayTwoSum += arrayTwo[i];
//   }

//   let arrayTwoAverage = arrayTwoSum / arrayTwo.length;

//   console.log(arrayOneAverage, arrayTwoAverage);

//   if (arrayOneAverage > arrayTwoAverage) {
//     console.log(true);
//     return true;
//   } else {
//     console.log(false);
//     return false;
//   }
// }

// compareArrays(ages, moreAges);


//QUESTION 12

// function willBuyDrink(isHotOutside, moneyInPocket){
//     if(isHotOutside ==  true && moneyInPocket > 10.50){
//         return true
//     } else return false
// }


// console.log(willBuyDrink(true, 15))


//  QUESTION 13

// the problem is to create a function that tells you if you should water your plants or not based on
// a boolean to tell you if the soil is dry

let soilIsDry = true

function waterPlants(isDry){
 if( isDry == true ){
     console.log("Time to water the plants!")
 } else {
     console.log("The plants don't need water today")
 }

}


waterPlants(true)