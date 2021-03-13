// false: 0,-0, '', null, undefined 
// true: -1, 'hello', [], 'false'
let num; // undefined

if(num) {
    console.log('true!')
} else {
    console.log('false!')
}

num && console.log(num)  
// 앞의 구문이 true가 되어야만 뒤의 구문이 실행된다.

let obj = {
    name: 'totherain'
}

obj && console.log(obj.name) // 권장되는 방법