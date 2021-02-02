// Function
// - fundemental building block in the program 
// - subprogram can be used multiple times 
// - performs a task or calculates a value 

// 1. Function declaration
// function name(param1, param2) { body... return;}
// one function === one thing
// naming : doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
    console.log('hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('How are you')
log(1234)

// 2. Parameters
// Premitive parameters: passed by value
// object parameters: passed by reference 
function changeName(obj) {
    obj.name = 'coder';
}
const totherain = { name: 'totherain' };
changeName(totherain);
console.log(totherain)  // name: "coder"

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`)
}
showMessage('Hi!'); //Hi! by unknown

// 4. Rest parameters (added in ES6)
function printAll(...args) { //paremeter 값들이 배열로 전달된다.
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg))
}
printAll('dream', 'coding', 'ellie') //dream coding ellie

// 5. Local scope
let globalMessage = 'global'; //global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    //  console.log(childMessage);
}
printMessage();
//console.log(message) // 에러발생

//scope란 결국 밖에서는 안이 보이지 않고 접근이 되지 않으며 안에서만 밖을 볼 수 있으며 접근할 수 있는 창과 같다.

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`) // sum: 3

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    function upgradeUser(user) {
        if (user.point > 10) {
            // long upgrade logic...
        }
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function 

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () { // anonymous function
    console.log('print');
};
print();  // print
const printAgain = print;
printAgain(); // print
const sumAgain = sum;
console.log(sumAgain(1, 3)) // 4

// 2. callback function using function expression 
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

const printYes = function () {
    console.log('yes!')
}

// name function
// better debugging in debugger's stack traces
// recursions

const printNo = function print() {
    console.log('no!')
    //  print();
};
randomQuiz('wrong', printYes, printNo); //no!
randomQuiz('love you', printYes, printNo); //yes!

// Arrow functions
// always anonymous

const simplePrint = function () {
    console.log('simplePrint');
}

//const simplePrint = () => console.log('simplePrint!');
//const add = () => a + b;
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
}

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();

// Fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

const calculate = {
    add: function (a, b) {
        return a + b;
    },
    substract: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    },
    remainder: function (a, b) {
        return a % b;
    }
}
const add1 = calculate.add(3, 5);
const substract1 = calculate.substract(5, 3);
const multiply1 = calculate.multiply(3, 5);
const divide1 = calculate.divide(6, 3);
const remainder1 = calculate.remainder(7, 3);


console.log(add1, substract1, multiply1, divide1, remainder1)

// switch 이용하여 calculator 작성 
function caclulator(command, a, b) {
    switch (command) {
        case add:
            return a + b
        case minus:
            return a - b
        case multi:
            return a * b;
        case divide:
            return a / b;
        default:
            throw Error('wrong order')

    }
}
console.log(caclulator('divide', 5, 3))