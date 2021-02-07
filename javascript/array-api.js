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

    const result = array.splice(0, 2)
    console.log(result)
    console.log(array)


}


class Student {

}
