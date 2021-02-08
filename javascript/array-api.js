// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange']

    // console.log(fruits.toString())
    const result = fruits.join('-')
    console.log(result)
}

// Q2. make an array out of a string 
{
    const fruits = '🍉,🍊,🍋,🍍';
    console.log(fruits.split(","))
}

// 03. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5]
    console.log(array.reverse())
}

// 04. make new array without the first two elements 
{
    const array = [1, 2, 3, 4, 5]
    /* array.shift()
     array.shift()
     console.log(array)
     */

    /*
   const result = array.splice(0, 2)
   console.log(result)
   console.log(array)
  */
    const result = array.slice(2, 5)
    console.log(result)

    // splice는 array 자체를 수정하는 method이고 slice는 array에서
    // 원하는 부분만 return 해서 받아오고 싶을 때 사용한다. 

}


class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 67),
    new Student('E', 18, true, 88)
];

// Q5. find a student with the score 90
{
    result = students.find((item, index) => item.score === 90)
    console.log(result)
}

// Q6. make an array of enrolled students
{
    result = students.filter((item) => item.enrolled)
    console.log(result)
}

// Q7. make an array containing only the students' scores 
// result should be: [45, 80, 90, 66, 88]
{
    result = students.map(item => item.score)
    console.log(result)



}

// Q8. check if there is a student with the score lower than 50
{
    result = students.some(item => item.score < 50)
    console.log(result)


    const result1 = students.every(item => item.score < 50);
    console.log(result1);
}
