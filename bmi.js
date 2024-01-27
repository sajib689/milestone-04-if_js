const weight = 69
const height = 5.8
const bmi = weight / (height ** 2)

if(bmi <= 18.5) {
    console.log('Underweight')
} else if (bmi <= 25.0) {
    console.log('Normal')
} else if (bmi <= 30.0) {
    console.log('Overweight')
} else if (bmi > 30) {
    console.log('obese')
}