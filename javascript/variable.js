// 1. Use strict
// added in ES 5
// use this for Vanilla Javscript.

//'use strict';

// 2. Variable
// let (added in ES6)
console.log(age)

let globalPerson = 'famous man'

{
    let person = 'K'
    console.log(person);

    person = 'Hi'
    console.log(person)
    console.log(globalPerson)
}

//console.log(person)

console.log(globalPerson);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// 호이스팅이란 어디에 선언했는가와 상관없이 항상 제일 위로 선언을 끌어올려주는 것을 말한다.
// var has no block scope

age = 4;
console.log(age);
var age;
//선언하기 전에 값을 할당할 수 있다.

/*
console.log(age1);
let age1;
*/

{
    age2 = 5;
    var age2;
}
console.log(age2)

// 3. Constants
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes 
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types 
// prmitive, single item: number, string, boolean, null, undefine, symbol 
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.3; // decimal number
console.log(`value: ${count}, type: ${typeof count}`) // value: 17, type : number
console.log(`vlaue: ${size}, type: ${typeof size}`) // value: 17.3, type : number

// number - special numeric values : infinity, -infinity, NaN

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity); // Infinity
console.log(negativeInfinity); // -Infinity
console.log(nAn); //NaN

// bigInt (fairly new, don't use it yet)
const bigInt = 12479174814791471984719847194719424n;
// over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string 
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`); // hello brendan, type: string
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`); // hi brendan!, type: string

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null 
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined 
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2)
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`)

//object, real-life object, data structure
const K = { name: 'k', age: 25 }
K.age = 27; // 변경가능 

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0))
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));