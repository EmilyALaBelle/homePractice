/*Create a function that takes an array of numbers and return
 both the minimum and maximum numbers, in that order.*/

let numArr = [5, 7, 2, 4, 40, 10, 20, 1]
let max = numArr[0]
let min = numArr[0]
function sortNum(numArr) {

    for (let i = 0; i <= numArr.length; i++) {
        let num = numArr[i]
        if (num > max) {
            max = num

        }
        if (num < min) {
            min = num

        }

    }
    console.log(`The maximum number in the array is ${max}`)
    console.log(`The minimum number in the array is ${min}`)
}
sortNum(numArr)