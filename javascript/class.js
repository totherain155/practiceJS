'use strict';
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }


    // methods 
    speak() {
        console.log(`${this.name}: hello!`);
    }

}

const totherain = new person('totherain', 25)
console.log(totherain.name) // totherain
console.log(totherain.age) // 25
totherain.speak(); // totherain : hello!

// 2. Getter and setters 
class user {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age() {
        return this._age;
    }

    set age(value) {
        //  if (value < 0) {
        //      throw Error('age can not be negative');
        //  }
        this._age = value < 0 ? 0 : value;
    }

}

const user1 = new user('steve', 'job', -1)
console.log(user1.age)

// 3. Fields (public, private)
// Too soon!

class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);  // 2
console.log(experiment.privateField); // undefined

// 4 . Static properties and methods 
// Too soon ! 
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher)

    }
}

const article1 = new Article(1);
const article2 = new Article(2);
//console.log(article1.publisher) // undefined
console.log(Article.publisher); // Dream Coding
Article.printPublisher(); // Dream Coding

// obcject에 상관없이, (들어오는 데이터에 상관없이) 공통적으로 class에서 
// 쓸 수 있는 거라면 static과 static method를 이용해서 작성하는 것이 
// memory의 사용을 조금 더 줄여 줄 수 있다. 

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape { }
class Triangle extends Shape {
    draw() {
        super.draw()  // 부모의 메소드도 호출
        console.log('🔺');
    }
    getArea() {
        return (this.width * this.height) / 2;      // overriding (함수를 재정의 하였다.)
    }
    toString() {
        return `Triangle : color : ${this.color}`
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw(); // drawing blue color of
console.log(rectangle.getArea())  // 400
const triangle = new Triangle(20, 20, 'red');
triangle.draw(); // drawing red color of
console.log(triangle.getArea()); // 200

// 6. Class checking: instanceOf (왼쪽의 object가 오른쪽의 class를 이용해서 만들어진건지 체크)
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle);  // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape);  // true (상속받음)
console.log(triangle instanceof Object); // true
console.log(triangle.toString()); // Triangle : color : red