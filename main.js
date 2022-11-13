const inputs= document.querySelectorAll('input[type="text"] ,input[type="number"],input[type="year"]');
// console.log(inputs);
//fonction that controls each input
const nameChecker=(value)=>{
  console.log(value);
  
}
const numberChecker=(value)=>{
console.log(value);
}
const monthChecker=(value)=>{
console.log(value);
}
const yearChecker=(value)=>{
console.log(value);
}
const cvvChecker=(value)=>{
console.log(value);
}
// use a 'forEach' to give an evenListener individually
inputs.forEach((input)=>{
 input.addEventListener('input',(e)=>{
  // console.log(e.target.id);
  switch (e.target.id) {
    case "name":
      nameChecker(e.target.value)  
      break;
    case "number":
      numberChecker(e.target.value)  
      break;
    case "month":
      monthChecker(e.target.value)  
      break;
    case "year":
      yearChecker(e.target.value)  
      break;
    case "cvv":
      cvvChecker(e.target.value)  
      break;
  
    default:nul;
      break;
  }
 })
})