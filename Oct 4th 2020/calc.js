const onlyDivTag = document.createElement("div");
document.body.appendChild(onlyDivTag);
onlyDivTag.classList.add("container");

const onlyFieldSet = document.createElement("fieldset");
onlyDivTag.appendChild(onlyFieldSet);
onlyFieldSet.setAttribute("id","container");

const $Form = document.createElement("form");
onlyFieldSet.appendChild($Form);
$Form.setAttribute("name","calculator");
$Form.setAttribute("id","deal");

const $Input1 = document.createElement("input");
$Form.appendChild($Input1);
$Input1.setAttribute("id","display");
$Input1.setAttribute("name","display");


var $BR = document.createElement("br")
deal.appendChild($BR);

const $clearC = document.createElement("input");
$Form.appendChild($clearC);
$clearC.setAttribute("id","clearButton");
$clearC.setAttribute("type","button");
$clearC.setAttribute("value","CE");
$clearC.addEventListener("click",function(){
document.getElementById("display").value = "";
alert("You clicked on clear button");
});

var $BR = document.createElement("br")
deal.appendChild($BR);


const $button7 = document.createElement("input")
$Form.appendChild($button7);
$button7.setAttribute("type","button");
$button7.setAttribute("value","7");
$button7.classList.add("button","digits");
$button7.addEventListener("click",function(){
document.getElementById("display").value += "7";
alert("Number 7");
});

const $button8 = document.createElement("input")
$Form.appendChild($button8);
$button8.setAttribute("type","button");
$button8.setAttribute("value","8");
$button8.classList.add("button","digits");
$button8.addEventListener("click",function(){
document.getElementById("display").value += "8";
alert("Number 8");
});

const $button9 = document.createElement("input")
$Form.appendChild($button9);
$button9.setAttribute("type","button");
$button9.setAttribute("value","9");
$button9.classList.add("button","digits");
$button9.addEventListener("click",function(){
document.getElementById("display").value += "9";
alert("Number 9");
});

const $plus = document.createElement("input")
$Form.appendChild($plus);
$plus.setAttribute("type","button");
$plus.setAttribute("value","+");
$plus.classList.add("button","mathButtons");
$plus.addEventListener("click",function(){
document.getElementById("display").value += "+";
alert("Plus + ");
});

var $BR = document.createElement("br")
deal.appendChild($BR);

const $button4 = document.createElement("input")
$Form.appendChild($button4);
$button4.setAttribute("type","button");
$button4.setAttribute("value","4");
$button4.classList.add("button","digits");
$button4.addEventListener("click",function(){
document.getElementById("display").value += "4";
alert("Number 4");
});


const $button5 = document.createElement("input")
$Form.appendChild($button5);
$button5.setAttribute("type","button");
$button5.setAttribute("value","5");
$button5.classList.add("button","digits");
$button5.addEventListener("click",function(){
document.getElementById("display").value += "5";
alert("Number 5");
});

const $button6 = document.createElement("input")
$Form.appendChild($button6);
$button6.setAttribute("type","button");
$button6.setAttribute("value","6");
$button6.classList.add("button","digits");
$button6.addEventListener("click",function(){
document.getElementById("display").value += "6";
alert("Number 6");
});

const $minus = document.createElement("input")
$Form.appendChild($minus);
$minus.setAttribute("type","button");
$minus.setAttribute("value","-");
$minus.classList.add("button","mathButtons");
$minus.addEventListener("click",function(){
document.getElementById("display").value += "-";
alert("Minus -");
});

var $BR = document.createElement("br")
deal.appendChild($BR);

const $button1 = document.createElement("input")
$Form.appendChild($button1);
$button1.setAttribute("type","button");
$button1.setAttribute("value","1");
$button1.classList.add("button","digits");
$button1.addEventListener("click",function(){
    document.getElementById("display").value += "1";
    alert("Number 1");
});
const $button2 = document.createElement("input")
$Form.appendChild($button2);
$button2.setAttribute("type","button");
$button2.setAttribute("value","2");
$button2.classList.add("button","digits");
$button2.addEventListener("click",function(){
    document.getElementById("display").value += "2";
    alert("Number 2");
});

const $button3 = document.createElement("input")
$Form.appendChild($button3);
$button3.setAttribute("type","button");
$button3.setAttribute("value","3");
$button3.classList.add("button","digits");
$button3.addEventListener("click",function(){
    document.getElementById("display").value += "3";
    alert("Number 3");
});

const $multiply = document.createElement("input")
$Form.appendChild($multiply);
$multiply.setAttribute("type","button");
$multiply.setAttribute("value","*");
$multiply.classList.add("button","mathButtons");
$multiply.addEventListener("click",function(){
document.getElementById("display").value += "*";
alert("Multiply *");
});

var $BR = document.createElement("br")
deal.appendChild($BR);

const $dot = document.createElement("input")
$Form.appendChild($dot);
$dot.setAttribute("type","button");
$dot.setAttribute("value",".");
$dot.classList.add("button","digits");
$dot.addEventListener("click",function(){
document.getElementById("display").value += ".";
alert("Dot .");
});

const $button0 = document.createElement("input")
$Form.appendChild($button0);
$button0.setAttribute("type","button");
$button0.setAttribute("value","0");
$button0.classList.add("button","digits");
$button0.addEventListener("click",function(){
    document.getElementById("display").value += "0";
    alert("Number 0");
});

const $modulus = document.createElement("input")
$Form.appendChild($modulus);
$modulus.setAttribute("type","button");
$modulus.setAttribute("value","%");
$modulus.classList.add("button","digits");
$modulus.addEventListener("click",function(){
document.getElementById("display").value += "%";
alert("Modulus %");
});

const $divide = document.createElement("input")
$Form.appendChild($divide);
$divide.setAttribute("type","button");
$divide.setAttribute("value","/");
$divide.classList.add("button","mathButtons");
$divide.addEventListener("click",function(){
document.getElementById("display").value += "/";
alert("Divide /");
});

const $equals = document.createElement("input")
$Form.appendChild($equals);
$equals.setAttribute("type","button");
$equals.setAttribute("value","=");
$equals.classList.add("button","digits");
$equals.addEventListener("click",function(){
document.getElementById("display").value = eval(document.getElementById("display").value);
alert("Equals =");
});


const $form = document.querySelector("#deal")
const $InputField = document.querySelector("input[name='display']");

$InputField.addEventListener("keypress",function(event){
    alert("You pressed a key inside the input field"); 
    var ch = String.fromCharCode(event.which);
    if(!(/[0-9]/.test(ch))){
        event.preventDefault();
    }
    });



  

