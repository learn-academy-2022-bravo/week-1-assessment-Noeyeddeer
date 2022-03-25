// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: It will log 10. The .length method counts the elements of a string or array and returns the number of elements
// b) Verify and explain: The output was 10. No change to explanation from a).


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: It will log o. The [] at the end of a variable name is a method of indexing, where the computer looks for the element at index 4 after starting from 0. This starting point means that its looking for the fifth letter in the string, which is o.
// b) Verify and explain: The output was o. No change to explanation from a).


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: It will log Ruby. In an array, the elements are the items within the array separated by commas. Indexing an array works in a similar manner to indexing a string, however in this case the index is looking for the element in position 1, which is Ruby.
// b) Verify and explain: The output was Ruby. No change to explanation from a).


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: It will log ["SATURDAY", "SUNDAY"]. The .toUpperCase() method takes the characters of a string or the characters of strings inside an array and makes them uppercase.
// b) Verify and explain: Received TypeError: weekendDays.toUpperCase is not a function. It would appear that the .toUpperCase() method is only valid for strings. In order to use it in an array, you would need to specify a specific element of the array on which to use the method. For example:
console.log(weekendDays[0].toUpperCase(), weekendDays[1].toUpperCase())


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: It will log number. The typeof method returns the type of value that it is given as an argument. In this case dataTypes.length will return a numerical value indicating how many elements are in the array. A numberical value will lead typeof to display number as the type.
// b) Verify and explain: The output was number. No change to explanation from a).
