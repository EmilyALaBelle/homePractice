//power = voltage * current
function powerCalculator(voltage, current){
    return voltage * current
}
const power = powerCalculator(10, 20)
console.log(`The power is equal to ${power} watts`)