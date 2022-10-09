function addUp(num) {
    for (let i = num - 1; i > 0; i--) {
        num = num + i
    }
    console.log(num)
}
addUp(2)