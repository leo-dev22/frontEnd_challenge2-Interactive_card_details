
const inputs= document.querySelectorAll('input[type="text"],input[type="button"]');


// let pseudo,number,month,year,cvv;

const form= document.querySelector('form');
const btn= document.querySelector('#btn');

const pseudo= document.querySelector('#pseudo');


const cardNumber= document.querySelector('.card-number');  
const cardUsername= document.querySelector('.card-username');
const cardExpDate= document.querySelector('.card-exp_date');




const errorDisplay=(tag,message,valid)=>{
  const container= document.querySelector('.'+ tag +'-container');

  const span= document.querySelector('.'+tag+'-container>span');
  if(!valid){
    container.classList.add('error');
    span.textContent=message;
  }else{
    container.classList.remove('error');
    span.textContent=message;
  }
}

//fonction that controls each input
const pseudoChecker=(value)=>{
  
  if (value.length>0 && (!value.match(/^[A-Z ]*$/))) {
    errorDisplay('pseudo',"Your name should be on capital letter only");
    pseudo=null;
  
  }else{
    errorDisplay('pseudo',"",true);
     pseudo=value
  }
}

const numberChecker=(value)=>{
  if (value.length>0  &&((value.length<19)|| (!value.match(/^\d{4} \d{4} \d{4} \d{4}$/)))) {
    errorDisplay('number',"Wrong format, number only");
  number=null;
  }else{
    errorDisplay('number',"",true);
    number=value;
}}

const monthChecker=(value)=>{
  if (value.length>0  &&((value.length<2)|| (!value.match(/^\d{2}$/)))) {
    errorDisplay('month',"Can't be blank");
    month=null;
   
  }else{
    errorDisplay('month',"",true);
    month=value;
}}

const yearChecker=(value)=>{
  if (value.length>0  &&((value.length<2)|| (!value.match(/^\d{2}$/)))) {
    errorDisplay('year',"Can't be blank");
    year=value;
 
  }else{
    errorDisplay('year',"",true);
    year=value;
}
}
const cvvChecker=(value)=>{
  if (value.length>0  &&((value.length<3)||(!value.match(/^\d{3}$/)))) {
    errorDisplay('right',"Can't be blank")
    cvv=null;
  }else{
    errorDisplay('right',"",true);
    cvv=value;
};
}
// use a 'forEach' to give an evenListener individually
inputs.forEach((input)=>{
 input.addEventListener('input',(e)=>{
  switch (e.target.id) {
    case "pseudo":
      pseudoChecker(e.target.value)  
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
  
    default:null;
      break;
  }
  
 })
})

btn.addEventListener('click',(e)=>{
 e.preventDefault();

  // cardUsername.innerHTML=pseudo.value;
  
  const data={
    pseudo,
    number,
    month,
    year,
    cvv

  }
  inputs.forEach(elemn=>{
   elemn.addEventListener('input',(e)=>{
  const inputValue=e.target.value;
  const target=data[data.id];
  document.getElementById(target).innerHTML=inputValue;
   })
  })
  console.log(data);
 

})
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
