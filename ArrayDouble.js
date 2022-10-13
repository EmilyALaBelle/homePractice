//Write a function that takes an array of numbers and returns a new array with the square of each number

let arr = [4, 6, 12, 8, 2, 1, 34]

function arrSquared(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        let result = num * num
        newArr[i] = result
       
    }
    return newArr
}
let results = arrSquared(arr)
console.log(results)
