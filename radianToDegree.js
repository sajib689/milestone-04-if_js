// 01
function radianToDegree (radian) {
    var pi= Math.PI
    return radian * (180 / pi)
}
console.log(radianToDegree(0.7853981633974483))
// 02
function isJavaScriptFile (fileCheck) {
    if(fileCheck.includes('.js')) {
        return true
    } else {
        return false
    }
}
console.log(isJavaScriptFile('app.f'))
// 03
function oilPrice (diesel,petrol, octane) {
    const dieselTotal = diesel * 114
    const petrolTotal = petrol * 130
    const octaneTotal = octane * 135
    const totalPrice = dieselTotal + petrolTotal + octaneTotal
    return totalPrice
}
console.log(oilPrice(1,2,3))
// 04
function publicBusFare (people) {
    const peopleInBus = people % 50
    const microBusIn = peopleInBus % 11
    const publicBusCost = microBusIn * 250
    return publicBusCost
}
console.log(publicBusFare(309))
// 05
