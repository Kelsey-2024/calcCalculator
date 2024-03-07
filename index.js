//create a function called calcCalculate
//the parameter should take in two numbers --not sure which to use (a, b) or (inputOne, inputTwo) - tested
const calcCalculate = (inputOne, inputTwo) => {
  
}

//Create separate functions outside the calcCalculate function
  //create a function called getSum that adds two numbers
const getSum = (inputOne, inputTwo) => {
  return inputOne + inputTwo;
}
  //create a function called getDividend that divides two numbers
const getDividend = (inputOne, inputTwo) => {
  return inputOne / inputTwo;
}
  //create a function called getProduct that multiples two numbers
const getProduct = (inputOne, inputTwo) => {
  return inputOne * inputTwo;
}
  //create a function called getDifference that subtracts two numbers
const getDifference = (inputOne, inputTwo) => {
  return inputOne - inputTwo;
}
  //create a function called getRemainder returns the remainder when two numbers are divided
const getRemainder = (inputOne, inputTwo) => {
  return inputOne % inputTwo;
  //console.log(Math.round(a / b * 100) / 100);
}
  //create a function called convertPercentageToDecimal that takes in a percentage and returns the number as a decimal
const convertPercentageToDecimal = (inputOne, inputTwo) => {
  return Math.round((inputOne / inputTwo * 100) / 100);
}
//Single Inputs
  //create a function called inverseNumber that returns a positive or negative # based on input
const inverseNumber = (inputOne) => {
  if (inputOne === 0){
    return `Cannot compute, please submit another number.`;
  } else if (inputOne > 0){
     return Math.abs(inputOne)*-1;
  } else {
    return Math.abs(inputOne);
  } //very proud of this one
}
  //create a function called getRandomInteger that gets a random integer
const getRandomInteger = (minimum, maximum) => {
   if (maximum === undefined){
    maximum = 100;
   }
   return Math.floor(Math.random() * (maximum - minimum) + minimum);
}
  //create a function called getPi that returns 3.14
const getPi = (inputOne) => {
  return Math.PI * (inputOne + inputOne);
}
  //create a function called getSquareRoot returns square root of a number
const getSquareRoot = (inputOne) => {
  return Math.sqrt(inputOne);
}

calcCalculate(); //calling || invoking the function


//like an actual calculator we'll have "buttons" => HTML
  //each button will be an if statement for the following functions
  // **pause**



//Write a helpful message as my else statement > would we do a nested if > else statement?

