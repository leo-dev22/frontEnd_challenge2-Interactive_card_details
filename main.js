// Date regex for 2 numbers
// /^\d{2}$/
const inputs= document.querySelectorAll('input[type="text"] ,input[type="number"],input[type="year"]');

const errorDisplay=(tag,message,valid)=>{
  const Container= document.querySelector('.'+ tag +'-container');

  const span= document.querySelector('.'+tag+'-container>span');
  if(!valid){
    Container.classList.add('error');
    span.textContent=message;
  }else{
    Container.classList.remove('error');
    span.textContent=message;
  }
}

//fonction that controls each input
const nameChecker=(value)=>{
  
  if (value.length>0 && (!value.match(/^[A-Z ]*$/))) {
    errorDisplay('name',"Your name should be on capital letter only",)
  
  }else{
    errorDisplay('name',"",true)
  }
}

const numberChecker=(value)=>{
  if (value.length>0  &&((value.length<19)|| (!value.match(/^\d{4} \d{4} \d{4} \d{4}$/)))) {
    errorDisplay('number',"Wrong format, number only")
 
  }else{
    errorDisplay('number',"",true)
}}

const monthChecker=(value)=>{
  if (value.length>0  &&((value.length<2)|| (!value.match(/^\d{2}$/)))) {
    errorDisplay('month',"Can't be blank")
 
  }else{
    errorDisplay('month',"",true);
}}

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