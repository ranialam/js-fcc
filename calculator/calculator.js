let num1= 2;
let num2= 4;
let result=0;
document.getElementById("num1el").textContent=num1;
document.getElementById("num2el").textContent=num2;
let sum=document.getElementById("sumel")

function add(){
  result=num1 + num2;
  sum.textContent="Sum: "+result;
}

function sub(){
  result=num1 - num2;
  sum.textContent="Sum: "+result;
}

function divide(){
  result=num1 /num2;
  sum.textContent="Sum: "+result;
}

function mpy(){
  result=num1 * num2;
  sum.textContent="Sum: "+result;
}

