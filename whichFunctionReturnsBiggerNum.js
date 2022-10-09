
function f() {
    return 25
}

function g() {
    return 30
}

function which(varX) {
    const fResults = f(varX)
    const gResults = g(varX)

    if (fResults > gResults) {
        console.log('f')
    } else if (gResults > fResults) {
        console.log('g')
    } else {
        console.log('neither')
    }
}
which(g, f)