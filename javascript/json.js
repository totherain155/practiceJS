// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true)
console.log(json)

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    // symbol: Symbol('id'),  // 포함되지 않는다. 
    jump: () => {
        console.log(`${name} can jump!`)
    } // 함수는 object의 data가 아니라 포함되지 않는다. 
}


json = JSON.stringify(rabbit);
console.log(json)

json = JSON.stringify(rabbit, ["name", "color"])
console.log(json)

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`)
    return key === 'name' ? 'totherain' : value
})

console.log(json)

// 2. JSON to Object
// parse(json)

console.clear()
json = JSON.stringify(rabbit)
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
})
console.log(obj)
rabbit.jump();
// obj.jump() // 포함되어 있지 않음

console.log(rabbit.birthDate.getDate())
console.log(obj.birthDate.getDate());
