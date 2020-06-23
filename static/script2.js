/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

const fieldsets = document.getElementsByTagName('fieldset');
const  previousBtn  =  document.getElementById('previousBtn');
const  nextBtn  =  document.getElementById('nextBtn');
const buttons = document.getElementsByClassName('buttons');
const  finishBtn  =  document.getElementById('finishBtn');
const  content  =  document.getElementById('content');
const  bullets  =  [...document.querySelectorAll('.step')];
const firstField = document.getElementById('first');
const secondField = document.getElementById('second');
const thirdField = document.getElementById('third');

const max_step = 3; 
let currentStep = 1; //Dit is let omdat de current step gaat veranderen en dus nooit constant blijft


function showContent(){
    var displaySetting = secondField.style.display;

    if (displaySetting == 'block'){
        secondField.style.display = 'none';

    }



}



