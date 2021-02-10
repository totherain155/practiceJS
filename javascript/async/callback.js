'use strict'

// Synchronous callback
function printImmediately(print) {
    print();
}

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout)
}


// JavaScript is synchronous. // 정해진 순서에 맞게 코드가 실행 
// Excute the code block in order after hoisting.
// hoisting: var, function declaration 
// hoisting이란 var 변수나 함수 선언들이 자동적으로 가장 위로 올라가는 것을 말한다. 
console.log('1');  // 동기
/*setTimeout(function () {
    console.log('2');
}, 1000)
*/
setTimeout(() => console.log('2'), 1000) // 비동기
// callback 함수란 전달해주는 함수를 나중에 불러달라는 개념이다. 

console.log('3'); // 동기
printImmediately(() => console.log('hello')); // 동기
printWithDelay(() => console.log('async callback'), 2000) // 비동기

// Callback Hell example 
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'totherain' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id)
            } else {
                onError(new Error('not found'))
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'totherain') {
                onSuccess({ name: 'totherain', role: 'admin' })
            } else {
                onError(new Error('no access'))
            }
        }, 1000)
    }
}


const userStorage = new UserStorage()
const id = prompt('enter your id');
const password = prompt('enter your password')
userStorage.loginUser(
    id,
    password,
    (user) => {
        userStorage.getRoles(
            user,
            (userWithRole) => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
            },
            error => {
                console.log(error)
            }
        )
    },
    error => { console.log(error) }
);