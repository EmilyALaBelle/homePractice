/*Given a two dimensional array, return the co-ordinates of x.
If x is not inside the array, or if x appears multiple times, return [].
The co-ordinates should be zero indexed in row-major order.
You should assume you will always get an array as input. The array will only contain 'x's and 'o's. */

//import readline from "readline-sync"

let arr = ['o','o','o','o','x','o','o','o','o','o','o','o','o','o']
let num = 1
function findX (arr) {
for (let i = 0; i < arr.length; i++){
    
    let spot = arr[i]
    if(spot == 'x'){
        num = num + i
        console.log(spot, num)
    } 
}
}

findX(arr)
