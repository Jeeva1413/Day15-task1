//title
const head=document.createElement("h1");
head.innerText="calulator";
head.id="title";

//para 
const para=document.createElement("p");
para.innerText="calculator using Dom";
para.id="description"

// div 1 contains display box
const div1 = document.createElement("div");
div1.setAttribute("id", "calculator");

// display box output
const input = document.createElement("input");
input.setAttribute("id", "result");
input.setAttribute("readonly", "");
input.setAttribute("placeholder","0");

// div2 contains all the buttons of calculator
const div2 = document.createElement("div");
div2.setAttribute("id", "keys");

//clear button
const buttonclear = document.createElement("button");
buttonclear.setAttribute("onclick", "clearDisplay()");
buttonclear.id = "clear";
buttonclear.textContent = "C";

//delete sign
const buttondel = document.createElement("button");
buttondel.setAttribute("onclick", "Delete()");
buttondel.id = "delete";
buttondel.textContent = "<-";

//button decimal
const buttondot = document.createElement("button");
buttondot.setAttribute("onclick", "appendToDisplay('.')");
buttondot.id = "decimal";
buttondot.textContent = ".";

// mutliplication button
const buttonmul = document.createElement("button");
buttonmul.setAttribute("onclick", "appendToDisplay('*')");
buttonmul.id = "mul";
buttonmul.textContent = "*";

//number 7 button
const num7 = document.createElement("button");
num7.setAttribute("onclick", "appendToDisplay('7')");
num7.id = "7";
num7.textContent = "7";

//number 8 button
const num8 = document.createElement("button");
num8.setAttribute("onclick", "appendToDisplay('8')");
num8.id = "8";
num8.textContent = "8";

//number 9 button
const num9 = document.createElement("button");
num9.setAttribute("onclick", "appendToDisplay('9')");
num9.id = "9";
num9.textContent = "9";

//division button
const buttondiv = document.createElement("button");
buttondiv.setAttribute("onclick", "appendToDisplay('/')");
buttondiv.id = "div";
buttondiv.textContent = "/";

//number 4 button
const num4 = document.createElement("button");
num4.setAttribute("onclick", "appendToDisplay('4')");
num4.id = "4";
num4.textContent = "4";

//number 5 button
const num5 = document.createElement("button");
num5.setAttribute("onclick", "appendToDisplay('5')");
num5.id = "5";
num5.textContent = "5";

//number 6 button
const num6 = document.createElement("button");
num6.setAttribute("onclick", "appendToDisplay('6')");
num6.id = "6";
num6.textContent = "6";

//minus button
const buttonminus = document.createElement("button");
buttonminus.setAttribute("onclick", "appendToDisplay('-')");
buttonminus.id = "subtract";
buttonminus.textContent = "-";

//number 3 button
const num3 = document.createElement("button");
num3.setAttribute("onclick", "appendToDisplay('3')");
num3.id = "3";
num3.textContent = "3";

//number 2 button
const num2 = document.createElement("button");
num2.setAttribute("onclick", "appendToDisplay('2')");
num2.id = "2";
num2.textContent = "2";

//number 1 button
const num1 = document.createElement("button");
num1.setAttribute("onclick", "appendToDisplay('1')");
num1.id = "1";
num1.textContent = "1";

//Add button
const buttonadd = document.createElement("button");
buttonadd.setAttribute("onclick", "appendToDisplay('+')");
buttonadd.id = "add";
buttonadd.textContent = "+";

//number 0 button
const num0 = document.createElement("button");
num0.setAttribute("onclick", "appendToDisplay('0')");
num0.id = "0";
num0.textContent = "0";

//number 00 button
const num00 = document.createElement("button");
num00.setAttribute("onclick", "appendToDisplay('00')");
num00.id = "00";
num00.textContent = "00";

//equal button
const buttoneq = document.createElement("button");
buttoneq.setAttribute("onclick", "calculate()");
buttoneq.id = "equal";
buttoneq.textContent = "=";

const buttoneq1 = document.createElement("button");
buttoneq1.setAttribute("onclick", "calculate()");
buttoneq1.id = "equal";
buttoneq1.textContent = "=";

div1.append(input,div2);
div2.append(
  buttonclear,
  buttondel,
  buttondot,
  buttonmul,
  num7,
  num8,
  num9,
  buttondiv,
  num4,
  num5,
  num6,
  buttonminus,
  num3,
  num2,
  num1,
  buttonadd,
  num0, 
  num00,
  buttoneq,
);
document.body.append(head,para,div1);

const display= document.getElementById("result");

function appendToDisplay(input){
    display.value +=input;
}

function clearDisplay()
{
    display.value="";
}

function calculate(){
    try{
        display.value =eval(display.value);
    }
    catch(error)
    {
        alert("Enter valid number");
    }

}

function Delete(){
   display.value =display.value.slice(0,-1);
}