
// var total = 0;
// for(var num = 1; num <= 20; num++) {
//     if(num % 3 == 0) {
//         total = total + num
        
//     }
   
// }
// console.log(total)
// for (let i = 0; i < 5; i+=3) {
//     console.log(i);
//   }
//   let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }
const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
 if (i == 5) {
  continue;
 }
 console.log(array[i]);
}