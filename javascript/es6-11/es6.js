/** 
* Shorhand property names
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer

*/


{
  const totherain1 = {
      name: 'totherain',
      age: '18'
  }

  const name = 'totherain';
  const age = '20'

  //
  const totherain2 = {
      name : name,
      age: age
  }
  //
  const totherain3 = {
      name, 
      age
  }
   
  console.log(totherain1, totherain2, totherain3)
}
  // {name: "totherain", age: "18"} {name: "totherain", age: "20"} {name: "totherain", age: "20"}

  /**
 * Destructuring Assignment
 * 
 * 
 */

{
    // object
    const student = {
        name: 'Anna',
        level: 1
    }

    //
    {
        const name = student.name;
        const level = student.level;
        console.log(name, level) // Anna 1
    }

    {
        const {name, level} = student;
        console.log(name, level) // Anna 1
        // studnet에 있는 key와 value를 각각 name과 level에 맞게 
        // 할당이 된다.
    }
    
      const {name : studentName, level: studentLevel} = student
      console.log(studentName, studentLevel) // Anna 1

      // array
      const animals = ['😺','🐕']
     
      // bad case
      {
          const first = animals[0];
          const second = animals[1]
          console.log(first, second) // 😺 🐕
      }

      // good case 
      {
          const [first, second] = animals;
          console.log(first, second) // 😺 🐕
      }
    }

  
    /**
     * Spread Syntax
     * 
     */

    {
        const obj1 = {key: 'key1'};
        const obj2 = {key: 'key2'};
        const array = [obj1, obj2];

        // array copy
        const arrayCopy = [...array]
        // array에 들어있는 아이템들 하나하나씩을 각각 낱개로 
        // 가져와서 복사하는 것을 말한다. 
        console.log(array, arrayCopy)
        // 0: {key: "key1"}          0: {key: "key1"}
        // 1: {key: "key2"}          1: {key: "key2"} 
           
           
        const arrayCopy2 = [...array, {key : 'key3'}];
        // array를 복사해오면서 새로운 item을 추가할 수 있다. 
        
        obj1.key = 'newKey';
        // spread 연산자는 object안의 item을 하나하나 복사해오는 것이 아니라 
        // object가 가리키고 있는 참조값만 복사해 오기 때문에 spread operator를 이용해서
        // 복사해 온다 해도 원래의 obeject를 변경하게 된다면 전부다 영향이 갈 수 있다. 
        console.log(arrayCopy2)  
        //0: {key: "key1"}
        //1: {key: "key2"}
        //2: {key: "key3"}

        // object copy
        const obj3 = {...obj1}
        console.log(obj3)  // {key: "newKey"}

        // array concatenation
        const fruits1 = ['🍊','🍋']
        const fruits2 = ['🍅','🍉']
        const fruits = [...fruits1, ...fruits2]
        console.log(fruits) // ["🍊", "🍋", "🍅", "🍉"]

        // object merge
        const dog1 = {dog1 : '🐶'}
        const dog2 = {dog2 : '🐕'}
        const dog = {...dog1, ...dog2}
        console.log(dog)
        // {dog1: "🐶", dog2: "🐕"}
    }

    /** Default parameters
     * 
     * 
     */
 {
     // bad case
     {
         function printMessage(message) {
             if (message == null) {
                 message = 'default message'
             }
             console.log(message);
         }

         printMessage('hello');
         printMessage() 
     }

     // good case 
     {
         function printMessage(message = 'default message') {
             console.log(message)
         }
         
         printMessage('hello');
         printMessage()
     }
 }

 
 /**
  * Ternary Operator 
  */

 {
     const isCat = true;
     // bad case
     {
         let component;
         if (isCat) {
             component = '😺'
         
         } else {
             component = '🐶'
         }
         console.log(component) // 😺
     }

     // good case
     {
         const component = isCat ? '😺' : '🐶'
         console.log(component) // 😺
         console.log(isCat ? '😺' : '🐶') // 😺
     }


 }

 /**
  * Optional Chaning (ES11) 
  * 
  */

 {
     const person1 = {
         name: 'totherain',
         job: {
             title: 'S/W Engineer',
             manager: {
                 name: 'Bob'
             },
         },
     }
     const person2 = {
         name: 'Bob'
     }
 
     

 // bad case
 console.clear()
 {
     function printManager(person) {
         console.log(person.job.manager.name)
     }
     printManager(person1) // Bob
     // printManager(person2) // error
 }

 // bad case
 {
   function printManager(person) {
       console.log(
           person.job? person.job.manager
             ? person.job.manager.name 
              : undefined
              :undefined
       )
   }
       printManager(person1); // Bob
       printManager(person2); // undefined
     
 }

 function printMagaer(person) {
     console.log(person.job && person.job.manager && person.job.manager.name)
 } // person.job이 있고 person.job.manager가 있으면 person.job.manager.name을 출력한다.
 printManager(person1); // Bob
 printManager(person2); // undefined

// good case 
{
    function printManager(person) {
        console.log(person.job?.manager?.name)
    } // person.job이 있고 manager가 있으면 name을 출력 
    printManager(person1); // Bob
    printManager(person2); // undefined
}

}

/**
 * Nullish Coalescing Operator (ES11)
 */

{
    // Logical OR operator
    // false : false, '', 0, null, undefined
    {
        const name = 'totherain';
        const userName = name || 'Guest';
        // 앞의 item이 false일 때만 뒤의 item이 실행된다. 
        console.log(userName) // totherain
    }

    {
        const name = null;
        const userName = name || 'Guest';
        console.log(userName) // Guest

        const num = 0;
        const message = num || 'undefined';
        console.log(message) // undefined
    }

    // good case 
    {
        const name = '';
        const userName = name ?? 'Guest';
        console.log(userName)  // 빈 문자열

        const num = 0;
        const message = num ?? 'undefined';
        console.log(message)  // 0
    }
}