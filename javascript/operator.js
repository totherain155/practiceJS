// 1. String concatenation 

console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

console.log('K\'s music')

// 2. Numeric operators
console.log(1 + 1);  // add
console.log(1 - 1);  // substract
console.log(1 / 1);  // divide
console.log(1 * 1);  // multiply
console.log(5 % 2);  // remainder
console.log(2 ** 3); // exponentiation

// 3 . Increment and decrement operators
let counter = 3;
const preIncrement = ++counter;  // 4
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`)
// preIncrement: 4, counter: 4
const postIncrement = counter++;
// 먼저 변수의 값을 postIncrement에 할당한 다음 그 뒤에 counter의 값을 1 증가시키는 것이다.
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`)
// postIncrement: 4, counter: 5

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or)
console.log(`or: ${value1 || value2 || check()}`);



// 만약 value1이 true라면 뒤의 함수는 출력되지 않는다. 
// simple한 연산을 앞에두고 함수등(heavy한 operation)은 가장 뒤에 배치하는 것이 효율적인 작성법이다.

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);
// value1이 이미 false이기 때문에 뒤의 값을 상관하지 않는다.

// often used to compare long if-statement
// nullableObject && nullableObject.something

/*
if (nullableObject !== null) {
    nullableObject.something;
}
*/

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('😂')
    }
    return true;
}

// ! (not)
console.log(!value1);  // false

// 7. Equality 
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);  //true
console.log(stringFive != numberFive);  //false
// type를 변경하여 검사

// === strict equality, no type conversion
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive); //true
// type이 다르면 다른 것으로 판단한다.

// object equality by reference 
const totherain1 = { name: 'totherain' };
const totherain2 = { name: 'totherain' };
const totherain3 = totherain1;
//totherain1과 2에는 각각 다른 reference가 들어있고 다른 레퍼런스는 서로 다른 object를 가리킨다.
//totherain3에는 totherain1의 reference가 할당되어 있다. 
console.log(totherain1 == totherain2); // false (각각 다른 reference가 저장되어 있다. )
console.log(totherain1 === totherain2) // false (똑같은 type이든 아니든 reference 값이 역시 다르기 때문에 false이다. )
console.log(totherain1 === totherain3) // true (totherain1이 갖고 있는 reference value를 3으로 할당했기 때문에 같은 reference를 갖고 있다. )


// equality - puzzler 
console.log(0 == false) // true
console.log(0 === false) // false (0은 boolean type이 아니기 때문에 )
console.log('' == false) // true
console.log('' === false) // false (empty 문자열은 boolean type이 아니다.)
console.log(null == undefined) // true
console.log(null === undefined) // false (null과 undefined는 다른 type이다.)

// 8. Conditional operator 
// if, else if, else
const name1 = 'coder';
if (name1 === 'totherain') {
    console.log('Welcone !')
} else if (name1 === 'coder') {
    console.log('you are amazing coder')
} else {
    console.log('unknown')
}  // 'you are amazing coder'

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name1 === 'totherain' ? 'yes' : 'no')
// no

// 10. Switch statement
// use for multiple if checks 
// use for enum - like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('like you!');
        break;
    default:
        console.log('same all!');
        break;
} // go away!



// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`)
    i--;
} while (i > 0)

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}


for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers 
// (use continue)

for (i = 0; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(`Q1: ${i}`)
}


// Q2. iterate from 0 to 10 and print numbers until 
// reaching 8 (use break)
for (i = 0; i <= 10; i++) {
    if (i > 8) {
        break;
    }
    console.log(`Q2: ${i}`)
}