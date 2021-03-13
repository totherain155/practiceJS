// number, string, boolean, null, undefined
let number = 2;
let number2 = number;

console.log(number)
console.log(number2)


number2 = 3;

 console.log(number, number2)

 // object 
 let obj = {
     name1: 'totherain',
     age : 5, 
 }

 console.log(obj.name1)


 let obj2 = obj; 
 console.log(obj2.name1)

 obj.name = 'David'

 console.log('------')
 console.log(obj.name);
 console.log(obj2.name)


const obj3 = {
    name: 'ellie',
    age: 6
}

obj3.name = 'James'

console.log(obj3.name)

// refernce는 다른 object로 변경은 불가능하지만 refernce가 가리키고 있는 
// object의 다른 내용은 변경이 가능하다. 