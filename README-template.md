# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://leo-dev22.github.io/frontEnd_challenge2-Interactive_card_details/). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./images/laptop_screenshot-interactive-card-details.png)



### Links

- Solution URL: [https://leo-dev22.github.io/frontEnd_challenge2-Interactive_card_details/](https://leo-dev22.github.io/frontEnd_challenge2-Interactive_card_details/)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Javascript (regex semantic was useful)

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```js
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
```




## Author

- Website - [Leopauld Ndenko]()
- Frontend Mentor - [@leo-dev22](https://www.frontendmentor.io/profile/leo-dev22)


