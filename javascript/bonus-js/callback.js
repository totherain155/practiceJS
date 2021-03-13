function add(num1, num2) {
    return num1 + num2;
}



function print(name, age) {
    console.log(`${name} ${age}`)
}

print('totherain', 23);

const doSomething = add;
// add function이 가리키고 있는 reference가 복사된다.

const result = doSomething(2, 3);
console.log(result);

const result2 = add(2, 3);
console.log(result2)

function divide(num1, num2) { 
    return num1 / num2
}


function surprise(operator) {
   const result = operator(3, 5)
   // add function을 수행하는 것과 동일하다 
   console.log(result)
}

surprise(divide)