// function findDivisors(number) {
//   let divisors = 0;
  
//   for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//       divisors+=i;
//     }
//   }
  
//   return divisors;
// }
// let son =78
// let bolinuvchilar = findDivisors(son);

// console.log("Kiritilgan sonning bo'linuvchilari: " + bolinuvchilar);
// 2 misol 
let n = prompt ("1 da 10 gacha bo'lgan bilet raqamini kiriting:")
function ticek (n){
  switch (n) {
    case  2:
    case  3:
    case  4:
    case  5:
    case  6:
    case  7:
      console.log ("Econom 105 K");
      break;

      case  1:
      case  10:
        console.log ("Vip 210 K");
        break;  

      case  8:
      case  9:
        console.log ("Biznes 140 K");
        break;  
  
    default:
      console.log("Bunday bilet yo'q");
      break;
  }
}
console.log(ticek(5));