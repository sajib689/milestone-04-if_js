const price = 5000

if (price >= 5000) {
    const discount = price * 10 / 100
    const mainPrice = price - discount
    console.log(mainPrice)
} else {
    console.log(price)
}