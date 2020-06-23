/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

const  previousBtn  =  document.getElementById('previousBtn');
const  nextBtn  =  document.getElementById('nextBtn');
const  finishBtn  =  document.getElementById('finishBtn');
const  content  =  document.getElementById('content');
const  bullets  =  [...document.querySelectorAll('.step')];
const firstField = document.getElementById('first');
const secondField = document.getElementById('second');
const thirdField = document.getElementById('third');

const max_step = 3; 
let currentStep = 1; //Dit is let omdat de current step gaat veranderen en dus nooit constant blijft



function next () {
    bullets[currentStep  -  1].classList.add('completed');
	currentStep  +=  1;
	previousBtn.disabled  =  false;
     if (currentStep === 1){
        firstField.classList.remove("hide");
        secondField.classList.add("hide");
        thirdField.classList.add("hide");
    } else if (currentStep === 2){
        firstField.classList.add("hide");
        secondField.classList.remove("hide");
        thirdField.classList.add("hide");
    } else {
        firstField.classList.add("hide");
        secondField.classList.add("hide");
        thirdField.classList.remove("hide");
        nextBtn.disabled  =  true;
		finishBtn.disabled  =  false;
    }

    content.innerText  =  `Step Number ${currentStep}`;
};

function previous () {
    bullets[currentStep  -  2].classList.remove('completed');
	currentStep  -=  1;
	nextBtn.disabled  =  false;
	finishBtn.disabled  =  true;
	if  (currentStep  ===  1)  {
        previousBtn.disabled  =  true;
        firstField.classList.remove("hide");
        secondField.classList.add("hide");
        thirdField.classList.add("hide");
    } else if (currentStep === 2){
        firstField.classList.add("hide");
        secondField.classList.remove("hide");
        thirdField.classList.add("hide");
    } else {
        firstField.classList.add("hide");
        secondField.classList.add("hide");
        thirdField.classList.remove("hide");
    }

    content.innerText  =  `Step Number ${currentStep}`;
 };

https://stackoverflow.com/questions/2906582/how-to-create-an-html-button-that-acts-like-a-link
function over () {
    location.href='profile.html';
};

nextBtn.addEventListener('click', next)
previousBtn.addEventListener('click', previous)
finishBtn.addEventListener('click', over)

//pseudo code
//Als default staat class hide op secondField en thirdField  (je bent dus bij stap 1)
//dit gebeurd al in de html

//Wanneer je op stap 2 bent gaan firstField en thirdField op hide, secondField gaat van hide af
//if currentStep === 2
//firstField & thirdField .classList add hide
//secondField .classlist remove hide

//Wanneer je op stap 3 bent gaan firstField en ssecondField op hide, thirdField gaat van hide af
//if currentStep === 3
//firstField & secondField .classList add hide
//thirdField .classlist remove hide


