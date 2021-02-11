'use strict';

// Promise is a JavaScript object for asynchronous operation.
// state : pending -> fulfilled or rejected 
// Producer vs Consumer 

// 1. Producer
// when new Promise is created, the executor runs automatically. 
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files) // 기다리는 동안 다른일을 처리 (비동기적으로) 하는 것이 좋다.  
    console.log('doing something...');
    setTimeout(() => {
        resolve('totherain');
        // reject(new Error('no network'))
    }, 2000)
})

// 2. Consumers: then, catch, finally
promise.then((value) => {
    console.log(value)
})
    .catch(error => {
        console.log(error)
    })
    .finally(() => { console.log('finally') })

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
})

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000)
        })
    })
    .then(num => console.log(num))

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000)
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000)
    })

/*
getHen()
    .then(hen => getEgg(hen))
    .then(egg => cook(egg))
    .then(meal => console.log(meal))
*/


getHen()
    .then(getEgg)
    .then(cook)
    .then(console.log)
    .catch(console.log)


