console.log("Hello World");

// Create an array with a list of fruits starting with 3 fruit

// with that array now do the following
// - Add a new fruit to the end of the array
// - Display the array
// - Add a new fruit to the beginning of the array
// - Display the array
// - Remove the last fruit.
// - Display the array

let listFruit = ["bananas", "strawberry", "kiwi"]
listFruit.push("Mango") //add the element at the end
console.log(listFruit)
listFruit.unshift("avocado") //add the element at the begggining
console.log(listFruit)
listFruit.pop() //remove the last element
console.log(listFruit)
console.log(...listFruit)
//console.log(`This is regular display ${listFruit}`)
console.log("This is regular display " ,listFruit)
console.log("This is spread " , ...listFruit)
console.log(listFruit.sort())
console.log(listFruit.indexOf("kiwi"))

const chickenEgg = ['🥚', '🐔'].sort()
console.log(`The ${chickenEgg[0]} came first!`)