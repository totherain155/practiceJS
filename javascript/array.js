'use strict';

// Array 

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position 
const fruits = ['🍊', '🍓'];
console.log(fruits) // ['🍊', '🍓'];
console.log(fruits.length) // 2
console.log(fruits[0]) // 🍊
console.log(fruits[1]); // 🍓
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]) // 🍓

// 3. Looping over an array 
// print all fruits
// a. for 
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

// b. for of 
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
console.clear()
/*fruits.forEach(function (fruit, index, array) {
    console.log(fruit, index, array)
})
*/
fruits.forEach((element, index) => console.log(element, index)) // 🍊 0 🍓 1

// 4. Addtion, deletion, copy 
// push: add an item to the end 
fruits.push('🍍', '🥝');
console.log(fruits) //  ["🍊", "🍓", "🍍", "🥝"]

// pop: remove an item from the end 
fruits.pop(); // 마지막 항목이 빠진다.
fruits.pop();
console.log(fruits); (2)["🍊", "🍓"]

// unshift: add an item to the beginning 
fruits.unshift('🍏', '🍐')
console.log(fruits); // (4) ["🍏", "🍐", "🍊", "🍓"]

// shift: remove an item from the beginning
fruits.shift()
fruits.shift()
console.log(fruits); // (2) ["🍊", "🍓"]

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position 
fruits.push('🥬', '🥕', '🍄') // (5) ["🍊", "🍓", "🥬", "🥕", "🍄"]
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits); // (4) ["🍊", "🥬", "🥕", "🍄"]
fruits.splice(1, 1, '🍒', '🍅')
console.log(fruits); // (5) ["🍊", "🍒", "🍅", "🥕", "🍄"]

// combine two arrays 
const fruits2 = ['🍔', '🍕']
const newFruits = fruits.concat(fruits2);
console.log(newFruits) // (7) ["🍊", "🍒", "🍅", "🥕", "🍄", "🍔", "🍕"]

// 5. Searching 
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍒')); // 1
console.log(fruits.indexOf('🍅')); // 2
console.log(fruits.indexOf('🍗')); //  -1

// includes
console.log(fruits.includes('🍄')); // true
console.log(fruits.includes('🍗')); // false

// lastIndexOf 
console.clear();
fruits.push('🍊')
console.log(fruits) // (6) ["🍊", "🍒", "🍅", "🥕", "🍄", "🍊"]
console.log(fruits.indexOf('🍊')) // 0
console.log(fruits.lastIndexOf('🍊')) // 5
