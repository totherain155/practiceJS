// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in Javascript are instances of Object
// object = { key : value};

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age)
}

const totherain = { name: 'totherain', age: 20 }
print(totherain);

// with Javascript magic (dynamically typed language)
// can add properties later 
totherain.hasJob = true;
console.log(totherain.hasJob);

// can delete properties later
delete totherain.hasJob;

// 2. Computed properties 
// key should be always string
console.log(totherain.name);  // totherain
console.log(totherain['name']); // totherain
totherain['hasJob'] = true;
console.log(totherain.hasJob); // true


/*
function printValue(obj, key) {
    console.log(obj[key])
}

printValue(totherain, 'name'); //undefined


*/


function printValue(obj, key) {
    console.log(obj[key])
}

printValue(totherain, 'name');
printValue(totherain, 'age');


// 3 . Property value shorthand 
const person1 = { name: 'bob', age: 10 };
const person2 = { name: 'steve', age: 9 };
const person3 = { name: 'dave', age: 11 };
const person4 = new Person('totherain', 30)
/*
const person4 = makePerson('totherain', 33)

console.log(person4)

function Person(name, age) {
    return {
        name,
        age
    }
}
*/

// 4. Counstructor Function
function Person(name, age) {
    // this = {};
    this.name = name; // class constructor에서 했던 것처럼 한다.
    this.age = age;
    // return this;
} // 순수하게 object를 생성하는 함수들은 대문자로 시작하도록 함수를 만든다. 

// 5. in operator: property existence check (key in obj)
console.log('name' in totherain) // true
console.log('age' in totherain); // true
console.log('random' in totherain) // false
console.log(totherain.random) // undefined

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in totherain) {
    console.log(key);
} //name, age, hasJob

// for (valye of iterable)
const array = [1, 2, 4, 5];
/*for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}
*/
for (value of array) {
    console.log(value) // 1 2 4 5 
}

// 7. Fun cloning 
// Object.assing(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user) // name: 'coder', age: "20"

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear()
console.log(user3) // name: "coder", age: "20"

/*
const user4 = {};
Object.assign(user4, user);
console.log(user4) // name: "coder", age: "20"
*/

const user4 = Object.assign({}, user);
console.clear()
console.log(user4)

// another example 
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const fruit3 = { color: 'green' }
const mixed = Object.assign({}, fruit1, fruit2, fruit3);
console.log(mixed.color); // green (동일한 property가 있다면 뒤의 값으로 덮어 씌워준다.)
console.log(mixed.size);  // big