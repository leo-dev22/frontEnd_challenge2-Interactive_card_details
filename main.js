let inputText1=document.querySelector('.input_text1');
let inputText2=document.querySelector('.input_text2');
let inputText3=document.querySelector('.input_text3');
let inputText4=document.querySelector('.input_text4');
let inputText5=document.querySelector('.input_text5');
const outputText1=document.querySelector('.output_text1');
const outputText2=document.querySelector('.output_text2');
const outputText3=document.querySelector('.output_text3');
const outputText4=document.querySelector('.output_text4');
const outputText5=document.querySelector('.output_text5');
const inputs= document.querySelectorAll('input[type="text"],input[type="number"]');
rightPlus=document.querySelector('.right-plus')
rightMinus=document.querySelector('.right-minus')


const form= document.querySelector('form');
const btn= document.querySelector('#btn');
const btn2= document.querySelector('#btn2');

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
  
  if (value.length>0 && (!value.match(/^[a-zA-Z'-]+$/))) {
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
  if (value.length>0  &&((!value.match(/(^0[1-9]$)|(^1[0-2]$)/)))) {
    errorDisplay('month',"Wrong format");
    month=null;
   }else if(value.length===0){
    errorDisplay('month',"Can't be blank");
    month=null;
  }else{
    errorDisplay('month',"",true);
    month=value;
}}

const yearChecker=(value)=>{
  if (value.length>0  &&((!value.match(/(^0[1-9]$)|(^2[0-4]$)/)))) {
    errorDisplay('year',"Wrong year");
    year=null;
  }else if(value.length===0){
    errorDisplay('year',"Can't be blank");
   year=null;
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

if(inputText1 && inputText2 &&inputText3 && inputText4 &&inputText5){

  outputText1.innerHTML=inputText1.value;
  outputText2.innerHTML=inputText2.value;
  outputText3.innerHTML=inputText3.value;
  outputText4.innerHTML=inputText4.value;
  outputText5.innerHTML=inputText5.value;

  inputs.forEach((input)=>{
    input.value="";
  })

  inputText1=null;
  inputText2=null;
  inputText3=null;
  inputText4=null;
  inputText5=null;


  rightPlus.style.display='none';
  rightMinus.style.display='block';
}

})
btn2.addEventListener('click',()=>{
  rightPlus.style.display='block';
  rightMinus.style.display='none';
  

})

