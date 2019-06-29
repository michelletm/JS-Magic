var myArray = [-1, 1, 2, 3, 4]

// The classic for loop
for(let i = 0; i < myArray.length; i++){
  console.log(myArray[i])
}

//classic for loop is shorthand for:
let i = 0;
while(i < myArray.length){
  console.log(myArray[i])
  i = i + 1
}

// will run a command on each item
myArray.forEach((item, index) => {
  console.log(item, index)
})

// will modify and append each item of the array
var doubledArray = myArray.map(item => {
  return item * 2
})
console.log(doubledArray)

// will iterate and return item based on truthy/falsey value
var evens = myArray.filter(item =>{
  return item % 2 === 0
})
console.log(evens)

// will add all ites of array together
const sum = myArray.reduce((result, item) => {
  return result + item
}, 0) // zero is initial starting point
console.log(sum)

// will return truthy/falsey value based on conditions
var hasNegatives = myArray.some(item => {
  return item < 0
})
console.log('Array has a negative: ' + hasNegatives)

// will return truthy/falsey value based on conditions
var every = myArray.every(item => {
  return item > 0
})
console.log('Is every item positive: ' + every)

var objectArray = [{id: 'a', name:'me'}, {id: 'b'}, {id: 'c'}]

// will find and return an objec in an array based
// on object key value
const found = objectArray.find(item => {
  return item.id === 'a'
})
console.log('object found by key is:')
console.log(found)

var findIndex = objectArray.findIndex(item => {
  return item.id === 'b'
})

console.log('Index of object found by key:')
console.log(findIndex)

thisArray = [1, 2, 3, 2, 5]
var arrayOf2s = thisArray.filter(item =>{
  return item === 2
})
console.log("Array of 2's: " + arrayOf2s)

thisArray2 = [1, 2, 3, 4, 5]
var arrayOfEvens = thisArray2.filter(item =>{
  return item % 2 === 0
})
console.log('array of evens: ' + arrayOfEvens)