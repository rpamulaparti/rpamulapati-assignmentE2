// eq2.js
const number= document.getElementById("number");
const lista = document.querySelector('ul');

number.onchange = function(e){
    var numValue = parseInt(number.value);
    for(var i=1;i<=numValue; i++){
        let li = document.createElement("li");
        li.textContent = i;
        lista.appendChild(li);
    }
};