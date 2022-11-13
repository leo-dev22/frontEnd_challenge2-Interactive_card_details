// Date regex for 2 numbers
// /^\d{2}$/
const inputs= document.querySelectorAll('input[type="text"] ,input[type="number"],input[type="year"]');
// console.log(inputs);
//fonction that controls each input
const nameChecker=(value)=>{
  // console.log(value);
  const nameContainer= document.querySelector('.name-container');
  // console.log(nameContainer);
  const errorName= document.querySelector('.name-container>span');
  // console.log(errorName);
  if (value.length>0 && (!value.match(/^[A-Z ]*$/))) {
    nameContainer.classList.add('error');
    errorName.textContent="Your name should contain any special character";
    
  // }else if(!value.match(/^[a-zA-Z0-9_.-]*$/)){
  //   nameContainer.classList.add("error");
  //   errorName.textContent="Your name should contain any special character";
  }else{
    nameContainer.classList.remove('error');
    errorName.textContent="";
  }
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