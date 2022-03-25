// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

//These variables set the temperatures to be used as the function arguments
const temp1 = 42
const temp2 = 350
const temp3 = 212

//Beginning of the function
const boilingPoint = (temp) => {
//First conditional statement returns the necessary string if the temperature is at the boiling point
  if(temp == 212){
    return temp + " is at boiling point"
//Second conditional statement returns the necessary string if the temperature is below the boiling point
  }else if(temp < 212){
    return temp + " is below boiling point"
//Third conditional statement returns the necessary string if the temperature is anything else, which can only be above the boiling point
  }else {
    return temp + " is above boiling point"
  }
}
//Command to return function with passed-in argument in the terminal
console.log(boilingPoint(temp3))

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

//These variables establish the two arrays to be combined and measured
const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]
//This variable establishes a new array which is a combination of the first two arrays
const combineArrays = myNumbers1.concat(myNumbers2)

//This function uses the .length method to calculate the number of elements in the combined array established above
const arrayLength = (length) => {
  return combineArrays.length
}
//This command passes in the function name in order to see the result of the function
console.log(arrayLength())

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ovarB"

//This variable establishes the string to be modified
const currentCohort = "Bravo 2022"
//This variable splits the elements from the previous variable and turns them into an array
const splitCohort = currentCohort.split("")
//This variable reverses the elements in the array from the previous variable
const reverseCohort = splitCohort.reverse()

//This function uses the join() method to bring the elements from the reversed array back into a string
const reverseString = (string) => {
  return reverseCohort.join("")
}
//This command passes in the reverseString function in order to execute the aforementioned join function
console.log(reverseString())

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

//This array establishes the numbers to be evaluated as odd or even
const myArray = [13, 34, 5, 10, 27, 42]

//This for loop is designed to loop through the entire array beginning at index[0] and going one element at a time
for(let i=0; i<myArray.length; i++){
//This conditional statement specifies that if the remainder of the number in the array is equal to zero, the output should be "even"
  if(myArray[i] % 2 == 0){
    console.log("even")
//For every other case (since even and odd is a binary choice) the output will be odd
  }else {
    console.log("odd")
  }
}

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

//This function establishes two parameters for arguments to be passed in later
const numberSet = (num1, num2) => {
//This if statement specifies that if the first parameter is greater than the second parameter, then the statement will return the difference of the first and second parameters
  if(num1 > num2){
    return num1 - num2
//This else statement returns any other parameter entry, which for the purposes of this problem is really just num1 < num2
  }else {
    return num2 - num1
  }
}
//This command passes in both varieties of arguments in order to receive the expected output
console.log(numberSet(number1, number2), numberSet(number3, number4))
