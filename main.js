const inputText1=document.querySelector('.input_text1');
const inputText2=document.querySelector('.input_text2');
const inputText3=document.querySelector('.input_text3');
const inputText4=document.querySelector('.input_text4');
const inputText5=document.querySelector('.input_text5');
const outputText1=document.querySelector('.output_text1');
const outputText2=document.querySelector('.output_text2');
const outputText3=document.querySelector('.output_text3');
const outputText4=document.querySelector('.output_text4');
const outputText5=document.querySelector('.output_text5');
const inputs= document.querySelectorAll('input[type="text"],input[type="number"]');


const form= document.querySelector('form');
const btn= document.querySelector('#btn');

const pseudo= document.querySelector('#pseudo');


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
  if (value.length>0  && (!value===(01||02||03||04||05||06||07))) {
    errorDisplay('month',"Can't be blank");
    month=null;
   }else if(value.length===0){
    errorDisplay('month',"write something");
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

if(inputText1,inputText2,inputText3,inputText4,inputText5){

  outputText1.innerHTML=inputText1.value;
  outputText2.innerHTML=inputText2.value;
  outputText3.innerHTML=inputText3.value;
  outputText4.innerHTML=inputText4.value;
  outputText5.innerHTML=inputText5.value;
}

})
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
